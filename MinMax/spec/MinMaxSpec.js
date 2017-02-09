describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });




      it('should return [20,50] for [20,30,40,50]', function () {
        expect(findMinMax([20,30,40,50])).toEqual([20, 50]);
      });
      it('should return [60,80] for [60,70,80]', function () {
        expect(findMinMax([60,70,80])).toEqual([60,80]);
      });
      it('should return [2, 68] for [8, 68, 2]', function () {
        expect(findMinMax([8, 68, 2])).toEqual([2, 68]);
      });
      it('should return [4, 66] for [4, 66, 6]', function () {
        expect(findMinMax([4, 66, 6])).toEqual([4, 66]);
      });
      it('should return [2, 78] for [7, 78, 8, 68, 2]', function () {
        expect(findMinMax([7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [2, 88] for [4, 66, 6, 44, 7, 78, 88, 68, 2]', function () {
        expect(findMinMax([4, 62, 6, 44, 7, 78, 88, 68, 2])).toEqual([2, 88]);
      });


    });
    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

});
