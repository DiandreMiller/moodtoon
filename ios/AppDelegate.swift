import Foundation
import UIKit
import SpotifyiOS

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, SPTAppRemoteDelegate, SPTAppRemotePlayerStateDelegate {
    
    var window: UIWindow?
    var appRemote: SPTAppRemote?
    var accessToken: String?
    let playURI = ""
    
    lazy var configuration: SPTConfiguration = {
        let clientID = "49647a0c3e514f3fa2fee76ef1d3282f"
        let redirectURL = URL(string: "spotify-ios-quick-start://spotify-login-callback")!
        return SPTConfiguration(clientID: clientID, redirectURL: redirectURL)
    }()
    
    lazy var appRemote: SPTAppRemote = {
        let appRemote = SPTAppRemote(configuration: self.configuration, logLevel: .debug)
        appRemote.delegate = self
        return appRemote
    }()
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Set player API delegate and subscribe to player state
        appRemote.playerAPI?.delegate = self
        appRemote.playerAPI?.subscribe(toPlayerState: { (result, error) in
            if let error = error {
                print("Error subscribing to player state: \(error.localizedDescription)")
                // Handle error
            } else {
                print("Subscribed to player state")
            }
        })
        
        // Check if Spotify is active when the app launches
        SPTAppRemote.checkIfSpotifyAppIsActive { active in
            if active {
                // Spotify is active, prompt the user to connect Spotify
                // Implement your code to prompt the user here
                // Note: You can initiate the authentication flow here if desired
                let spotifyInstalled = self.appRemote?.authorizeAndPlayURI(self.playURI)
                if !spotifyInstalled! {
                    /*
                     * The Spotify app is not installed.
                     * Use SKStoreProductViewController with [SPTAppRemote spotifyItunesItemIdentifier] to present the user
                     * with a way to install the Spotify app.
                     */
                }
            }
        }
        
        return true
    }
  
    func applicationWillResignActive(_ application: UIApplication) {
      if self.appRemote.isConnected {
        self.appRemote.disconnect()
      }
    }
  
    func applicationDidBecomeActive(_ application: UIApplication) {
      if let _ = self.appRemote.connectionParameters.accessToken {
        self.appRemote.connect()
      }
    }

    
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        let parameters = appRemote?.authorizationParameters(from: url)
        if let accessToken = parameters?[SPTAppRemoteAccessTokenKey] as? String {
            appRemote?.connectionParameters.accessToken = accessToken
            self.accessToken = accessToken
        } else if let errorDescription = parameters?[SPTAppRemoteErrorDescriptionKey] as? String {
            // Show the error description if needed
            print("Error: \(errorDescription)")
        }
        return true
    }
    
    // MARK: - SPTAppRemoteDelegate methods
    
    func appRemoteDidEstablishConnection(_ appRemote: SPTAppRemote) {
      print("successfully connected to spotify!")
    }

    func appRemote(_ appRemote: SPTAppRemote, didFailConnectionAttemptWithError error: Error?) {
        // Connection failed
        if let error = error {
            print("Error connecting to Spotify: \(error.localizedDescription)")
            // Handle error
        }
    }

    func appRemote(_ appRemote: SPTAppRemote, didDisconnectWithError error: Error?) {
        // Connection disconnected
        if let error = error {
            print("Disconnected from Spotify: \(error.localizedDescription)")
            // Handle error
        }
    }
    
    // MARK: - SPTAppRemotePlayerStateDelegate method
    
  func playerStateDidChange(_ playerState: SPTAppRemotePlayerState) {
      debugPrint("Track name: \(playerState.track.name)")
      print("Player state changed:")
      print("Track name: \(playerState.track.name)")
      print("Artist: \(playerState.track.artist.name)")
      print("Album: \(playerState.track.album.name)")
      print("Playback position: \(playerState.playbackPosition)")
      print("Playback speed: \(playerState.playbackSpeed)")

      if let track = playerState.track {
          print("Track name: \(track.name)")
          print("Artist: \(track.artist.name)")
          print("Album: \(track.album.name)")
      }
      
      print("Playback position: \(playerState.playbackPosition)")
      print("Is paused: \(playerState.isPaused)")
      print("Playback speed: \(playerState.playbackSpeed)")
      
      
      // Check if the track is playing
      if !playerState.isPaused {
          print("Track is currently playing")
      }
      
      // Check if shuffle mode is enabled
      if playerState.playbackOptions.isShuffling {
          print("Shuffle mode is enabled")
      }
  }

}

