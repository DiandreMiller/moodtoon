// SpotifyManager.m

#import "SpotifyManager.h"
#import <SpotifyiOS/SpotifyiOS.h>

@implementation SpotifyManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(checkIfSpotifyAppIsActive:(RCTResponseSenderBlock)callback) {
    [SPTAppRemote checkIfSpotifyAppIsActive:^(BOOL active) {
        callback(@[@(active)]);
    }];
}

@end
