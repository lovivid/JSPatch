//*
require('JPEngine').defineStruct({
     "name": "SVector3",
     "types": "fff",
     "keys": ["x", "y", "z"]});

require('JPEngine').defineStruct({
     "name": "SMatrix4",
     "types": "ffffffffffffffff",
     "keys": ["m00", "m01", "m02", "m03", "m10", "m11", "m12", "m13", "m20", "m21", "m22", "m23", "m30", "m31", "m32", "m33"]});

//*/

//*
// oc方法签名
// - (SVector3)computePos:(SVector3)pos3d modelMatrix:(SMatrix4)modelMatrix
defineClass('JPUnionTest', {
    computePos_modelMatrix: function(pos3d, modelMatrix) {
            
    console.log('jspatch, computePos_modelMatrix, arg1:'+pos3d.x+', '+pos3d.y+', '+pos3d.z);
    
    var posvec = self.ORIGcomputePos_modelMatrix(pos3d, modelMatrix);
    
    console.log('jspatch, ORIGcomputePos_modelMatrix, posvec:'+posvec.x+', '+posvec.y+', '+posvec.z);
            
    //return posvec;
    console.log('in js patch computePos_modelMatrix');
    var rtn = {x:-1000, y:-1000, z:0};
    if (isNaN(posvec.x) || isNaN(posvec.y)) {
        return rtn;
    }
     
    return rtn;
}
});
//*/

defineClass('JPUnionTest', {
    testFloat:function(inarg) {
        console.log('jspatch, testFloat, arg:'+inarg);
        var rtn = self.ORIGtestFloat(inarg);
        console.log('jspatch, ORIGtestFloat, rtn:'+rtn);

        if (isNaN(rtn)){
            rtn = 5
        } else {
            rtn += 1;
        }
        return rtn;
    }
});

defineClass('JPUnionTest', {
    testStruct:function(inarg) {
        console.log('jspatch, testStruct, arg:'+inarg.x+', '+inarg.y+', '+inarg.width+', '+inarg.height);
        var rtn = self.ORIGtestStruct(inarg);
        console.log('jspatch, testStruct, rtn:'+rtn.x+', '+rtn.y+', '+rtn.width+', '+rtn.height);
            
        return rtn;
    }
});
/*
// oc方法签名
// - (GLKVector3)compute2dPos:(GLKVector3)pos3d modelMatrix:(GLKMatrix4)modelMatrix
defineClass('JPUnionTest', {
    compute2dPos_modelMatrix: function(pos3d, modelMatrix) {
        var posvec = self.ORIGcompute2dPos_modelMatrix(pos3d, modelMatrix);
        return posvec;

         if (isNaN(posvec.x) || isNaN(posvec.y)) {
         var rtn = {x:-1000, y:-1000, z:0};
         return rtn;
         }
         
         return posvec;
    }
});
//*/
