// oc方法签名
// - (GLKVector3)compute2dPos:(GLKVector3)pos3d modelMatrix:(GLKMatrix4)modelMatrix
defineClass('JPUnionTest', {
    compute2dPos_modelMatrix: function(pos3d, modelMatrix) {
        var posvec = self.ORIGcompute2dPos_modelMatrix(pos3d, modelMatrix);
        return posvec;

        /*
         if (isNaN(posvec.x) || isNaN(posvec.y)) {
         var rtn = {x:-1000, y:-1000, z:0};
         return rtn;
         //return {x:-1000, y:-1000, z:0};
         }
         
         return posvec;
         //*/
    }
});
//*/
