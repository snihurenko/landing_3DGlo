class SliderCarousel{
    constructor({
            main, wrap, next, prev, 
            infinity = false, 
            position = 0, 
            slidesToShow = 3, 
            responsive = []
        }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.responsive = responsive;

        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/this.slidesToShow)
        };
    }

    init(){
        this.addGloClass();
        this.addStyle();
        this.controlSlider();
        if (this.responsive){
            this.responseInit();
        }        
    }

    addGloClass(){
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides){
            item.classList.add('glo-slider__item')
        }
    }

    addStyle(){        
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        } 
        style.textContent = `
            .glo-slider{
                overflow: hidden;
            }
            .glo-slider__wrap{
                display: flex;
                transition: transform 0.5s;
                will-change: transform;
            }
            .glo-slider__item{
                margin: 0 auto !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
            }
        `;

        document.head.appendChild(style)
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if (this.options.infinity || this.options.position > 0){
            --this.options.position;
            if (this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider(){
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    responseInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse){
                for (let i = 0; i < allResponse.length; i++){
                    if (widthWindow < allResponse[i]){
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100/this.slidesToShow);
                        this.addStyle();
                    } 
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100/this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();

        window.addEventListener('resize', checkResponse)
    }
};

export default SliderCarousel;

