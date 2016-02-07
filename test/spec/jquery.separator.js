define([
  'jquery',
  'separator'
], function ($) {
    'use strict';

    describe('A suite to test 1000', function () {

      it('Must correctly separate one thousand', function () {
        expect($.separator('1000')).toEqual('1 000');
      });

    });

    describe('Increasing bets a lil bit', function () {

      it('Must correctly separate dozens of thousands', function () {
        expect($.separator('10000')).toEqual('10 000');
      });

    });

    describe('Test if separator can work precise', function () {

      it('Must correctly separate really big numbers', function () {
        var realBigNum = 3e16;

        expect($.separator(realBigNum)).toEqual('30 000 000 000 000 000');
      });
    });

    describe('Test for NaN', function () {

      it('Must correctly respond if there is not a number', function () {

        expect(function () {
          $.separator('cat');
        }).toThrow();
      });
    });
});
