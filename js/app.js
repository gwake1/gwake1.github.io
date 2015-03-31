(function() {
  "use strict";
  var chart = c3.generate({
      data: {
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      }
  });

  setTimeout(function () {
      chart.load({
          columns: [
              ['HTML', 0, 15, 66, 78, 85, 90, 100]
          ],
      type: "area-spline"
      });
  }, 1000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['CSS', 0, 12, 45, 80, 90, 95, 100]
          ],
      type: "area-spline"
      });
  }, 1500);

  setTimeout(function () {
      chart.unload({
          ids: ['HTML', 'CSS', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 2500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      });
  }, 3000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30],
              ['Back End Skills', 0, 25]
          ],
      type: "bar"
      });
  }, 3500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MVC', 0, 0, 20, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Angular', 0, 0, 0, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['ASP.NET MVC', 0, 0, 0, 0, 25, 66, 100]
          ],
      type: "area-spline"
      });
  }, 5000);

  setTimeout(function () {
      chart.unload({
          ids: ['Angular', 'ASP.NET MVC', 'MVC', 'Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 6000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 6500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TDD', 0, 7, 15, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 7500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['QUnit', 0, 0, 10, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Mocha', 0, 0, 15, 20, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MSFT Unit Test', 0, 0, 0, 0, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 9000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'QUnit','Mocha','MSFT Unit Test' ]
      });
  }, 10000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 10500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 11000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['BDD',  0, 5, 10, 25, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 11500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TestStack.White',  0, 0, 0, 0, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 12000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SpecsFor.MVC',  0, 0, 0, 0, 10, 50, 100]
          ],
      type: "area-spline"
      });
  }, 12500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'BDD', 'TestStack.White', 'SpecsFor.MVC' ]
      });
  }, 13500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 14000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 14500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Deployment', 0, 5, 15, 40, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 15500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['AWS S3', 0, 0, 25, 60, 38, 75, 100]
          ],
      type: "area-spline"
      });
  }, 16000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Azure', 0, 0, 0, 15, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 16500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'Deployment', 'AWS S3', 'Azure' ]
      });
  }, 17500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 18000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30, 40, 55, 75, 85],
              ['Back End Skills', 0, 25, 33, 40, 60, 80]
          ],
      type: "bar"
      });
  }, 18500);


  var chart = c3.generate({
      data: {
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      }
  });

  setTimeout(function () {
      chart.load({
          columns: [
              ['HTML', 0, 15, 66, 78, 85, 90, 100]
          ],
      type: "area-spline"
      });
  }, 1000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['CSS', 0, 12, 45, 80, 90, 95, 100]
          ],
      type: "area-spline"
      });
  }, 1500);

  setTimeout(function () {
      chart.unload({
          ids: ['HTML', 'CSS', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 2500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      });
  }, 3000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30],
              ['Back End Skills', 0, 25]
          ],
      type: "bar"
      });
  }, 3500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MVC', 0, 0, 20, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Angular', 0, 0, 0, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['ASP.NET MVC', 0, 0, 0, 0, 25, 66, 100]
          ],
      type: "area-spline"
      });
  }, 5000);

  setTimeout(function () {
      chart.unload({
          ids: ['Angular', 'ASP.NET MVC', 'MVC', 'Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 6000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 6500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TDD', 0, 7, 15, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 7500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['QUnit', 0, 0, 10, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Mocha', 0, 0, 15, 20, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MSFT Unit Test', 0, 0, 0, 0, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 9000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'QUnit','Mocha','MSFT Unit Test' ]
      });
  }, 10000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 10500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 11000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['BDD',  0, 5, 10, 25, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 11500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TestStack.White',  0, 0, 0, 0, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 12000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SpecsFor.MVC',  0, 0, 0, 0, 10, 50, 100]
          ],
      type: "area-spline"
      });
  }, 12500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'BDD', 'TestStack.White', 'SpecsFor.MVC' ]
      });
  }, 13500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 14000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 14500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Deployment', 0, 5, 15, 40, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 15500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['AWS S3', 0, 0, 25, 60, 38, 75, 100]
          ],
      type: "area-spline"
      });
  }, 16000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Azure', 0, 0, 0, 15, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 16500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'Deployment', 'AWS S3', 'Azure' ]
      });
  }, 17500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 18000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Database Design', 0, 10, 12, 15, 75, 90, 100]
              ],
      type: "area-spline"
      });
  }, 19000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SQL', 0, 0, 12, 15, 40, 70, 100]
              ],
      type: "area-spline"
      });
  }, 19500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['LINQ', 0, 0, 0, 15, 70, 90, 100]
              ],
      type: "area-spline"
      });
  }, 20000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','Database Design', 'SQL', 'LINQ' ]
      });
  }, 21000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 21500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30, 40, 55, 75, 90],
              ['Back End Skills', 0, 25, 33, 40, 60, 90]
          ],
      type: "bar"
      });
  }, 22000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Growth as a Developer', 0, 0, 15, 30, 61, 95, 100]
          ],
      type: "area-spline"
      });
  }, 22500);


  var chart = c3.generate({
      data: {
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      }
  });

  setTimeout(function () {
      chart.load({
          columns: [
              ['HTML', 0, 15, 66, 78, 85, 90, 100]
          ],
      type: "area-spline"
      });
  }, 1000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['CSS', 0, 12, 45, 80, 90, 95, 100]
          ],
      type: "area-spline"
      });
  }, 1500);

  setTimeout(function () {
      chart.unload({
          ids: ['HTML', 'CSS', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 2500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      });
  }, 3000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30],
              ['Back End Skills', 0, 25]
          ],
      type: "bar"
      });
  }, 3500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MVC', 0, 0, 20, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Angular', 0, 0, 0, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['ASP.NET MVC', 0, 0, 0, 0, 25, 66, 100]
          ],
      type: "area-spline"
      });
  }, 5000);

  setTimeout(function () {
      chart.unload({
          ids: ['Angular', 'ASP.NET MVC', 'MVC', 'Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 6000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 6500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TDD', 0, 7, 15, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 7500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['QUnit', 0, 0, 10, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Mocha', 0, 0, 15, 20, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MSFT Unit Test', 0, 0, 0, 0, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 9000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'QUnit','Mocha','MSFT Unit Test' ]
      });
  }, 10000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 10500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 11000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['BDD',  0, 5, 10, 25, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 11500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TestStack.White',  0, 0, 0, 0, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 12000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SpecsFor.MVC',  0, 0, 0, 0, 10, 50, 100]
          ],
      type: "area-spline"
      });
  }, 12500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'BDD', 'TestStack.White', 'SpecsFor.MVC' ]
      });
  }, 13500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 14000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 14500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Deployment', 0, 5, 15, 40, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 15500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['AWS S3', 0, 0, 25, 60, 38, 75, 100]
          ],
      type: "area-spline"
      });
  }, 16000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Azure', 0, 0, 0, 15, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 16500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'Deployment', 'AWS S3', 'Azure' ]
      });
  }, 17500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 18000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30, 40, 55, 75, 85],
              ['Back End Skills', 0, 25, 33, 40, 60, 80]
          ],
      type: "bar"
      });
  }, 18500);


  var chart = c3.generate({
      data: {
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      }
  });

  setTimeout(function () {
      chart.load({
          columns: [
              ['HTML', 0, 15, 66, 78, 85, 90, 100]
          ],
      type: "area-spline"
      });
  }, 1000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['CSS', 0, 12, 45, 80, 90, 95, 100]
          ],
      type: "area-spline"
      });
  }, 1500);

  setTimeout(function () {
      chart.unload({
          ids: ['HTML', 'CSS', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 2500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10]
          ],
      type: "bar"
      });
  }, 3000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30],
              ['Back End Skills', 0, 25]
          ],
      type: "bar"
      });
  }, 3500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MVC', 0, 0, 20, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Angular', 0, 0, 0, 40, 75, 95, 100]
          ],
      type: "area-spline"
      });
  }, 4500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['ASP.NET MVC', 0, 0, 0, 0, 25, 66, 100]
          ],
      type: "area-spline"
      });
  }, 5000);

  setTimeout(function () {
      chart.unload({
          ids: ['Angular', 'ASP.NET MVC', 'MVC', 'Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End']
      });
  }, 6000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 6500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TDD', 0, 7, 15, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 7500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['QUnit', 0, 0, 10, 25, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Mocha', 0, 0, 15, 20, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 8500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['MSFT Unit Test', 0, 0, 0, 0, 33, 77, 100]
          ],
      type: "area-spline"
      });
  }, 9000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'QUnit','Mocha','MSFT Unit Test' ]
      });
  }, 10000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40],
              ['Back End Skills', 0, 25, 33]
          ],
      type: "bar"
      });
  }, 10500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 11000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['BDD',  0, 5, 10, 25, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 11500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['TestStack.White',  0, 0, 0, 0, 33, 65, 100]
          ],
      type: "area-spline"
      });
  }, 12000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SpecsFor.MVC',  0, 0, 0, 0, 10, 50, 100]
          ],
      type: "area-spline"
      });
  }, 12500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'BDD', 'TestStack.White', 'SpecsFor.MVC' ]
      });
  }, 13500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55],
              ['Back End Skills', 0, 25, 33, 40]
          ],
      type: "bar"
      });
  }, 14000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 14500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Deployment', 0, 5, 15, 40, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 15500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['AWS S3', 0, 0, 25, 60, 38, 75, 100]
          ],
      type: "area-spline"
      });
  }, 16000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Azure', 0, 0, 0, 15, 55, 88, 100]
          ],
      type: "area-spline"
      });
  }, 16500);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','TDD', 'Deployment', 'AWS S3', 'Azure' ]
      });
  }, 17500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 18000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Database Design', 0, 10, 12, 15, 75, 90, 100]
              ],
      type: "area-spline"
      });
  }, 19000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['SQL', 0, 0, 12, 15, 40, 70, 100]
              ],
      type: "area-spline"
      });
  }, 19500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['LINQ', 0, 0, 0, 15, 70, 90, 100]
              ],
      type: "area-spline"
      });
  }, 20000);

  setTimeout(function () {
      chart.unload({
          ids: ['Front End Skills', 'Back End Skills', 'Before NSS - Front End', 'Before NSS - Back End','Database Design', 'SQL', 'LINQ' ]
      });
  }, 21000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Before NSS - Front End', 15],
              ['Before NSS - Back End', 10],
              ['Front End Skills', 0, 30, 40, 55, 75],
              ['Back End Skills', 0, 25, 33, 40, 60]
          ],
      type: "bar"
      });
  }, 21500);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Front End Skills', 0, 30, 40, 55, 75, 90],
              ['Back End Skills', 0, 25, 33, 40, 60, 90]
          ],
      type: "bar"
      });
  }, 22000);

  setTimeout(function () {
      chart.load({
          columns: [
              ['Confidence as a Developer', 35, 65, 2, 55, 30, 66, 83]
          ],
      type: "area-spline"
      });
  }, 23000);
}());
