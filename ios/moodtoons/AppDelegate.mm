#import "AppDelegate.h"
#import <SpotifyiOS/SpotifyiOS.h>
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Initialize the React Native module name and initial props
    self.moduleName = @"moodtoons";
    self.initialProps = @{};

    // Initialize SPTConfiguration with your client ID and redirect URI
    SPTConfiguration *configuration = [[SPTConfiguration alloc] initWithClientID:@"49647a0c3e514f3fa2fee76ef1d3282f"
                                                                     redirectURL:[NSURL URLWithString:@"spotify-ios-quick-start://spotify-login-callback"]];
    
    // Initialize SPTAppRemote with your SPTConfiguration
    self.appRemote = [[SPTAppRemote alloc] initWithConfiguration:configuration logLevel:SPTAppRemoteLogLevelDebug];
    
    // Set your connection delegate
    self.appRemote.delegate = self;

    // Attempt to connect
    [self.appRemote connect];

    // Set player API delegate and subscribe to player state
    [self.appRemote.playerAPI setDelegate:self];
    [self.appRemote.playerAPI subscribeToPlayerState:^(id _Nullable result, NSError * _Nullable error) {
        if (error) {
            NSLog(@"Error subscribing to player state: %@", error);
            // Handle errors
        } else {
            // Subscription successful
            NSLog(@"Subscribed to player state");
        }
    }];

    // Check if Spotify is active when the app launches
    [SPTAppRemote checkIfSpotifyAppIsActive:^(BOOL active) {
        if (active) {
            // Spotify is active, prompt the user to connect Spotify
            // Implement your code to prompt the user here
            // Note: You can initiate the authentication flow here if desired
            BOOL spotifyInstalled = [self.appRemote authorizeAndPlayURI:@"spotify:track:your_track_uri"];
            if (!spotifyInstalled) {
                /*
                * The Spotify app is not installed.
                * Use SKStoreProductViewController with [SPTAppRemote spotifyItunesItemIdentifier] to present the user
                * with a way to install the Spotify app.
                */
            }
        }
    }];

    // Return the result of the superclass's implementation of the application:didFinishLaunchingWithOptions: method
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// Return the source URL for the bridge
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
    #if DEBUG
        return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
    #else
        return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    #endif
}

// Parse out the accessToken in application:openURL:options: and set it on the SPTAppRemote connectionParameters
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    NSDictionary *params = [self.appRemote authorizationParametersFromURL:url];
    NSString *token = params[SPTAppRemoteAccessTokenKey];
    if (token) {
        self.appRemote.connectionParameters.accessToken = token;
    } else if (params[SPTAppRemoteErrorDescriptionKey]) {
        NSLog(@"%@", params[SPTAppRemoteErrorDescriptionKey]);
    }
    return YES;
}

// Implement SPTAppRemoteDelegate methods
- (void)appRemoteDidEstablishConnection:(nonnull SPTAppRemote *)appRemote {
    // Connection was successful, you can begin issuing commands
}

- (void)appRemote:(nonnull SPTAppRemote *)appRemote didFailConnectionAttemptWithError:(nullable NSError *)error {
    // Connection failed
}

- (void)appRemote:(nonnull SPTAppRemote *)appRemote didDisconnectWithError:(nullable NSError *)error {
    // Connection disconnected
}

// Implement SPTAppRemotePlayerStateDelegate method
- (void)playerStateDidChange:(id<SPTAppRemotePlayerState>)playerState {
    NSLog(@"Track name: %@", playerState.track.name);
}

// Implement the application:openURL:options: method to handle authentication callback
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    NSDictionary *parameters = [self.appRemote authorizationParametersFromURL:url];
    NSString *accessToken = parameters[SPTAppRemoteAccessTokenKey];
    
    if (accessToken) {
        self.appRemote.connectionParameters.accessToken = accessToken;
        // Optionally, you can store the access token for later use
        // self.accessToken = accessToken;
    } else {
        NSString *errorDescription = parameters[SPTAppRemoteErrorDescriptionKey];
        // Show the error description if needed
    }
    
    return YES;
}

@end
