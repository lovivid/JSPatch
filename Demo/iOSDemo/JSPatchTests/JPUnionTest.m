//
//  JPUnionTest.m
//  JSPatchDemo
//
//  Created by zjnmailbox@163.com on 12/7/16.
//

#import "JPUnionTest.h"

GLKVector3 GLKVector3Make(float x, float y, float z) {
    GLKVector3 v = { x, y, z };
    return v;
}

@implementation JPUnionTest
- (GLKVector3)compute2dPos:(GLKVector3)pos3d modelMatrix:(GLKMatrix4)modelMatrix {
    return GLKVector3Make(0,0,0);
}
@end
