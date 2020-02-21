(function (win, doc, jq) {
    var app = (function () {
        return {
            init() {
                this.initEnvents();
                this.x = 0;
                this.y = 0;
                this.tempo = 0;
            },
            getTime(){
                let myM = new Date(1999,8,10);
                let Mact = new Date();
                return Mact.getTime() - myM.getTime();
            },
            getMth(){
                let Mact = new Date();
                if(Mact.getMonth() <= 9){
                    return 4 + Mact.getMonth();
                }
                return Mact.getMonth();
            }
            ,
            initEnvents() {
                setInterval(() => {
                    document.querySelector('#cont span.ms').innerHTML = `${parseInt((app.getTime())/1000) + app.tempo}`;
                    app.tempo += 1;
                    document.querySelector('#cont span.year').innerHTML = `${parseInt(app.getTime()/31536000000) }`;
                    console.log();
                    document.querySelector('#cont span.mth').innerHTML = `${parseInt(`${ app.getTime()/3153600000 }`.slice(2))}`;
                    
                }, 1000);
               
                document.addEventListener('DOMContentLoaded', function (){
                jq('#aboutMy').click(() => {
                    if (app.x === 0) {
                        jq('#fa-ap').css('height', '200');
                        var $apresent = document.querySelector('#apresent');
                        $apresent.innerHTML = `<p> <p>`;
                        return app.x = 1;
                    } else {
                        jq('#fa-ap').css('height', '100');
                        app.x = 0;
                        var $apresent = document.querySelector('#apresent');
                        $apresent.innerHTML = "<p>Hi, I'm Hamilton!</p>";
                    }
                });
                jq(win).scroll(() => {

                    if (win.scrollY > 147 && app.y == 0) {
                        app.y = 1;
                        $('.app-do-up').removeClass('button-up');
                        $('.app-do-up').addClass('button-down');
                        document.querySelector('#home').style.display = 'block';
                    } else if (win.scrollY < 137 && app.y == 1) {
                        app.y = 0;
                        $('.app-do-up').removeClass('button-down');
                        $('.app-do-up').addClass('button-up');
                        document.querySelector('#home').style.display = 'none';
                    }
                });
                var cont = Array.from(document.querySelectorAll('div#home ul li'));
                var cont1 = Array.from(document.querySelectorAll('div.scrolM'));
                
                cont.forEach((e, i) => {
                    e.addEventListener('click', () => {
                        var d = 0;
                        switch (i) {
                            case 0:
                                d = cont1[0].offsetHeight;
                                break;
                                case 1:
                                    d = cont1[0].offsetHeight + cont1[1].offsetHeight;
                                    break;
                                    case 2:
                                        d = cont1[0].offsetHeight + cont1[2].offsetHeight + cont1[1].offsetHeight;
                                        break;
                                        case 3:
                                            d = cont1[0].offsetHeight + cont1[3].offsetHeight + cont1[1].offsetHeight + cont1[2].offsetHeight;
                                            break;
                                            case 4:
                                                d = cont1[4].offsetHeight + cont1[3].offsetHeight + cont1[2].offsetHeight + cont1[1].offsetHeight + cont1[0].offsetHeight;;
                                                break;
                        
                            default:
                                break;
                        }
                        window.scrollTo(0,d);
                    })
                });
            });
            }
        }
    })();
    
        app.init();
    
    
})(window, document, $);