//
//  JPUnionTest.h
//  JSPatchDemo
//
//  Created by zjnmailbox@163.com on 12/7/16.
//

#import <Foundation/Foundation.h>

#ifndef __JPUnionTest_TYPES_H
#define __JPUnionTest_TYPES_H

#ifdef __cplusplus
extern "C" {
#endif
    
union _GLKVector3
{
    struct { float x, y, z; };
    struct { float r, g, b; };
    struct { float s, t, p; };
    float v[3];
};
typedef union _GLKVector3 GLKVector3;

union _GLKMatrix4
{
    struct
    {
        float m00, m01, m02, m03;
        float m10, m11, m12, m13;
        float m20, m21, m22, m23;
        float m30, m31, m32, m33;
    };
    float m[16];
} __attribute__((aligned(16)));
typedef union _GLKMatrix4 GLKMatrix4;

GLKVector3 GLKVector3Make(float x, float y, float z);

@interface JPUnionTest : NSObject
- (GLKVector3)compute2dPos:(GLKVector3)pos3d modelMatrix:(GLKMatrix4)modelMatrix;
@end
    
#ifdef __cplusplus
}
#endif

#endif
