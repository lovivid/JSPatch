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

SVector3 SVector3Make(float x, float y, float z) {
    SVector3 v = { x, y, z };
    return v;
}

@implementation JPUnionTest

- (float)testFloat:(float)inarg{
    return inarg+1;
}

- (CGRect)testStruct:(CGRect)inArg {
    return CGRectMake(inArg.origin.x + 1.f,
                      inArg.origin.y + 1.f,
                      inArg.size.width + 1.f,
                      inArg.size.height + 1.f);
}

- (SVector3)computePos:(SVector3)pos3d modelMatrix:(SMatrix4)modelMatrix {
    return SVector3Make(0, 1, 0);
}

- (GLKVector3)compute2dPos:(GLKVector3)pos3d modelMatrix:(GLKMatrix4)modelMatrix {
    return GLKVector3Make(0, 0, 0);
}
@end
