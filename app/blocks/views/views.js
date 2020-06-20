function Nail(id) {
    this.count = 2;
    this.id = id;
    this.img = id.querySelector('.views__image');
    this.link = id.querySelector('.views__link');

    this.bindEvents();
}

Nail.prototype.bindEvents = function () {
    var that = this;

    this.img.addEventListener('click', function (){
        that.switch();
    });

    this.link.addEventListener('click', function (){
        that.switch();
    });
};

Nail.prototype.switch = function () {
    var _count = this.count ++,
        _number= _count - 1;

    if (!_number) _number = 3
    if (this.count == 4 ) this.count = 1;

    this.img.classList.remove("views__image--position-" + _number);
    this.img.classList.add("views__image--position-" + _count);
};


var nails = document.querySelector('.views__list').querySelectorAll('.views__item');

for (var i = 0; i < nails.length; i++) {
    new Nail(document.getElementById(nails[i].id));
}
