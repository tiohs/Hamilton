(function (win, doc, jq) {
    var app = (function () {
        return {
            init() {
                this.initEnvents();
                this.x = 0;
                this.y = 0;
            },
            initEnvents() {
                jq('#aboutMy').click(() => {
                    if (app.x === 0) {
                        jq('#fa-ap').css('height', '200');
                        var $apresent = document.querySelector('#apresent');
                        $apresent.innerHTML = `<p> <p>`;
                        return this.x = 1;
                    } else {
                        jq('#fa-ap').css('height', '100');
                        app.x = 0;
                        var $apresent = document.querySelector('#apresent');
                        $apresent.innerHTML = "<p>Olá, Eu sou Hamilton Silva !</p>";
                    }
                });
                jq(win).scroll(() => {

                    if (win.scrollY > 147 && app.y == 0) {
                        app.y = 1;
                        $('.app-do-up').removeClass('button-up');
                        $('.app-do-up').addClass('button-down');
                    } else if (win.scrollY < 70 && app.y == 1) {
                        app.y = 0;
                        $('.app-do-up').removeClass('button-down');
                        $('.app-do-up').addClass('button-up');
                    }
                });
            }
        }
    })();
    app.init();
    
})(window, document, $);