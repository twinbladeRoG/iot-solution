var finger = function () {
  focus.attr({r:28.9, opacity: 1});
  focus.animate({r:80, opacity: 0.2}, 3000, mina.easein, finger);
};

var s = Snap("#parent");
var pointer = s.select('#pointer');
var focus = s.select('#focus');
var city = s.select('#city');
var clouds = s.select('#clouds');
var ih   = s.select("#inner-house");
var md   = s.select("#mid-road");
var iy   = s.select("#inner-factory");
var cl   = s.select("#clouds");
var wm   = s.select("#waves");
var car  = s.select("#car");
var bonet = s.select("#bonet");
var bus = s.select("#bus");
var rlight = s.select("#redlight");
var ylight = s.select("#yellowlight");
var glight = s.select("#greenlight");
var toast = s.select("#toast");
var tin  = s.select("#toast-inner");
var tout  = s.select("#toast-outer");
var lights = s.select("#lights-lamp");
var thermo = s.select("#thermo-barrel");
var smoke1 = s.select("#smoke");
var smoke2 = s.select("#smoke1");
var smoke3 = s.select("#smoke2");
var fire = s.select("#flames");
var fan = s.select("#fan_1_");
var waterfall = s.select("#waterfall");
var watergrad = s.select("#grad");
var fume1 = s.select("#fume1");
var fume2 = s.select("#fume2");
var fume3 = s.select("#fume3");
var handle = s.select("#handle");
var lg1 = s.select("#light-grad-1");
var lg2 = s.select("#light-grad-2");
var lg3 = s.select("#light-grad-3");
var box = s.select("#box-3");
var dbox = s.select("#dbox");
var mlight = s.select("#machine-light");
var hook = s.select("#hook_1_");
var chain = s.select("#chain");
var iot = s.select("#IoT");
var bar1 = s.select("#bar1");
var bar2 = s.select("#bar2");
var bar3 = s.select("#bar3");
var lpath = s.select("#lpath");
var mpath = s.select("#mpath");
var rpath = s.select("#rpath");
var lp1 = s.select("#lpath1");
var lp2 = s.select("#lpath2");
var lp3 = s.select("#lpath3");
var rp1 = s.select("#rpath1");
var rp2 = s.select("#rpath2");
var rp3 = s.select("#rpath3");
var network = s.select("#network");

var state = 0;
var ioTstate = 0;

var cloudsloop = function () {
  clouds.transform('t0,0');
  clouds.animate({ transform: 't4800' }, 10000, cloudsloop);
};

var washingMachineWave = function () {
  wm.transform('t0,0');
  wm.animate({ transform: 't-74.069' }, 2000, washingMachineWave);
};

var washingMachineWater = function () {
  if (state === 0) {
    watergrad.animate({opacity:'1'}, 1000);
    waterfall.transform('t0,0');
    waterfall.animate({transform: 't0,45',opacity: '0.3'}, 1500, washingMachineWater);
  }
  else {
    watergrad.animate({opacity:'0'}, 1000);
  }
};

var fridgeSmoke1 = function () {
  smoke1.transform('s1 t0,0');
  smoke1.attr({ opacity: '0.8'});
  if (state === 0) {
    smoke1.animate({transform: 's5 t5,-20', opacity: '0'}, 2000, mina.linear, fridgeSmoke1);
  }
};
var fridgeSmoke2 = function () {
  smoke2.transform('s1 t0,0');
  smoke2.attr({ opacity: '0.8'});
  if (state === 0) {
    smoke2.animate({transform: 's5 t7,-20', opacity: '0'}, 1800, mina.linear, fridgeSmoke2);
  }
};
var fridgeSmoke3 = function () {
  smoke3.transform('s1 t0,0');
  smoke3.attr({ opacity: '0.8'});
  if (state === 0) {
    smoke3.animate({transform: 's5 t6,-20', opacity: '0'}, 2500, mina.linear, fridgeSmoke3);
  }
};

var stoveFire = function () {
  fire.transform('s1,1 t0,0');
  if (state === 0) {
    fire.animate({transform: 's1,2.5 t0,-5'}, 500, mina.bounce, function () {
      fire.animate({transform: 's1,1 t0,0'}, 500, mina.linear, stoveFire);
    });
  }
  else {
    fire.animate({transform: 's1,1.1 t0,-0.5'}, 100, mina.bounce, function () {
      fire.animate({transform: 's1,1 t0,0'}, 100, mina.linear, stoveFire);
    });
  }
};

var toasterBread = function () {
  toast.transform('t0,10');
  if (state===0) {
    toast.animate({ transform: 't5, -60 r90' }, 500, mina.easein, function () {
      toast.animate({ transform: 't10, 10 r180' }, 500, mina.easeout, function () {
        toast.animate({}, 1000, toasterBread);
      });
    });
  }
  else {
    toast.animate({ transform: 't0, -6' }, 500, mina.bounce, function () {
      toast.animate({ transform: 't0, 10' }, 500, mina.easeout, function () {
        toast.animate({}, 1000, toasterBread);
      });
    });
  }
};

var airConditioner = function () {
  fan.transform('t0,0r0');
  if (state===0)
    fan.animate({ transform: 't0,0r360'},3000, mina.elastic, airConditioner);
  else
    fan.animate({ transform: 't0,0r360'},1000, mina.linear, airConditioner);
};

var thermometerFluid = function () {
  if (state===0) {
    thermo.animate({transform: 's1, 0.2 t0, 40'}, 1000, mina.bounce, function () {
      thermo.animate({transform: 's1, 1 t0, 2'}, 1000, mina.bounce, thermometerFluid);
    });
  }
  else {
    thermo.transform("s1, 0.6 t0, 2");
  }
};

var standLight = function () {
  lights.attr({opacity: '1'});
  if (state===0) {
    lights.animate({opacity : '0.1'}, 1000,mina.bounce, standLight);
  }
};

var carFume1 = function () {
  if (state===0) {
    fume1.transform('s1 t0,0');
    fume1.attr({ opacity: '0.8'});
    fume1.animate({transform: 's5 t6,-20', opacity: '0'}, 900, mina.linear, carFume1);
  }

};
var carFume2 = function () {
  if (state===0) {
    fume2.transform('s1 t0,0');
    fume2.attr({ opacity: '0.8'});
    fume2.animate({transform: 's5 t6,-20', opacity: '0'}, 800, mina.linear, carFume2);
  }

};
var carFume3 = function () {
  if (state===0) {
    fume3.transform('s1 t0,0');
    fume3.attr({ opacity: '0.8'});
    fume3.animate({transform: 's5 t6,-20', opacity: '0'}, 850, mina.linear, carFume3);
  }

};

var carCrash = function () {

  if (state===0) {
    glight.attr({opacity:'0.4'});
    ylight.attr({opacity:'0.4'});
    rlight.animate({opacity:'0.4'}, 200, function () {
      glight.animate({opacity:'1'}, 500);
    });

    car.animate({ transform: 't1050' }, 950, mina.easeout, function () {
      bonet.animate({transform:'t-5,-30r-20'}, 500, mina.bounce);
      carFume1();
      carFume2();
      carFume3();
    });
    bus.animate({transform:'t-830'},1000, mina.easeout );
  }
  else {

    rlight.attr({opacity:'0.4'});
    ylight.attr({opacity:'0.4'});
    glight.animate({opacity:'0.2'}, 200, function () {
      rlight.animate({opacity:'1'}, 500);
    });

    car.animate({ transform: 't800' }, 1200, mina.easeinout);
    bus.animate({transform:'t-890'},1200, mina.easeinout);
  }
};
var carReset = function () {
  car.transform('t0,0');
  bus.transform('t0,0');
  bonet.transform('t0,0r0');
};

var factoryLight1 = function () {
  lg1.attr({opacity: '1'});
  if (state===0)
    lg1.animate({opacity : '0.1'}, 1000,mina.bounce, factoryLight1);
};
var factoryLight2 = function () {
  lg2.attr({opacity: '1'});
  if (state===0)
    lg2.animate({opacity : '0.1'}, 1200,mina.bounce, factoryLight2);
};
var factoryLight3 = function () {
  lg3.attr({opacity: '1'});
  if (state===0)
    lg3.animate({opacity : '0.1'}, 900,mina.bounce, factoryLight3);
};

var chainFall = function () {
  hook.transform('t0,0');
  chain.attr({y2:'1069.5'});
  if (state===0) {
    hook.animate({transform:'t0,180'}, 1000, mina.bounce);
    chain.animate({y2:'1249.5'}, 1000, mina.bounce);
  }
  else {
    hook.animate({transform:'t0,180'}, 1000, mina.linear);
    chain.animate({y2:'1249.5'}, 1000, mina.linear);
  }
};

var boxMachine = function () {

  if (state===0) {
    handle.animate({transform:'t0,15r90'},500, function () {
      box.animate({transform:'t180'},2000, mina.easeout, function () {
        dbox.animate({transform:'t200'},3000, mina.easein);
      });
    });
  }
  else {
    handle.animate({transform:'t0,15r90'},500, function () {
      box.animate({transform:'t380'},2500, mina.easeinout);
    });
  }
};

var boxAndChainReset = function () {
  handle.transform('t0,0r0');
  box.transform('t0,0');
  dbox.transform('t0,0');
};

var iotReset = function () {
  mpath.attr({y2:'813.1'});

  lp3.attr({y2:'888.5'});
  lp2.attr({x2:'2794.7'});
  lp1.attr({y2:'-75.2'});
  iot.attr({opacity:'0'});
  rp3.attr({y2:'-33.2'});
  rp2.attr({x2:'6334.2'});
  rp1.attr({y2:'888.5'});

  bar1.attr({opacity:'0'});
  bar2.attr({opacity:'0'});
  bar3.attr({opacity:'0'});

  iot.attr({opacity:'0'});
};
var iotAnim = function () {
  iotReset();

  lp3.animate({y2:'11.8'},1000,function () {

    lp2.animate({x2:'4020.2'},1000, function () {

      lp1.animate({y2:'-421.7'},1000);
    });
  });
  mpath.animate({y2:'-428.2'},3000);
  rp1.animate({y2:'-33.2'},1000,function () {

    rp2.animate({x2:'4263.4'},1000, function () {

      rp3.animate({y2:'-396.2'},1000, function () {

        iot.animate({opacity:'1'},500, function () {
          bar1.animate({opacity:'1'},200, function () {
            bar2.animate({opacity:'1'},200,function () {
              bar3.animate({opacity:'1'},200,function () {
                this.animate({opacity:'1'}, 500, function() {
                  if (ioTstate === 0) {
                    fix();
                  }
                  else {
                    unfix();
                  }
                });
              });
            });
          });
        });
      });
    });
  });


};


window.onload = function () {
  cloudsloop();
  washingMachineWave();
  stoveFire();
  toasterBread();
  airConditioner();
  iotReset();

  pointer.attr({opacity: 0});

  finger();


};
var start=false;
$(document).ready(function () {
    unfix();
    start=true;
});

var unfix = function () {
  state=0;

  pointer.animate({opacity: 0}, 0);

  washingMachineWater();
  fridgeSmoke1();
  fridgeSmoke2();
  factoryLight3();
  thermometerFluid();
  standLight();


  city.animate({transform: 's4 t1800, -500'}, 1000, function () {
    carReset();
    iotReset();
    setTimeout(function () {
      city.animate({ transform: 's1.98 t-20, -330' }, 1000, mina.easeinout, function () {
        carCrash();
        boxAndChainReset();
        setTimeout(function () {
          city.animate({ transform: 's3.8 t-1768, -506' }, 1000, function () {
            pointer.animate({opacity: 1}, 500);
            boxMachine();
            chainFall();
            factoryLight1();
            factoryLight2();
            factoryLight3();
            s.click(function () {
              pointer.animate({opacity: 0}, 500);
              city.animate({ transform: 's1' }, 1000, function () {
                s.unclick();
                ioTstate=0;
                iotAnim();
              });
            });
          });
        }, 3000);
      });
    }, 3000);

  });

};

var fix = function () {
  state=1;

  pointer.animate({opacity: 0}, 0);

  city.animate({transform: 's4 t1800, -500'}, 1000);
  washingMachineWater();
  setTimeout(function () {
    iotReset();
    carReset();
    city.animate({ transform: 's1.98 t-20, -330' }, 1000, mina.easeinout, function () {
      carCrash();
      boxAndChainReset();
      setTimeout(function () {
        city.animate({ transform: 's3.8 t-1768, -506' }, 1000, function () {
          pointer.animate({opacity: 1}, 500);
          boxMachine();
          chainFall();
          factoryLight1();
          factoryLight2();
          factoryLight3();
          s.click(function () {
            pointer.animate({opacity: 0}, 500);
            city.animate({ transform: 's1' }, 1000, function () {
              s.unclick();
              ioTstate=1;
              city.animate({}, 2000, function () {
                iotAnim();
              });
            });
          });
        });
      }, 3000);
    });
  }, 3000);
};