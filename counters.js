// function isAnyPartOfElementInViewport(el) {

        //     const rect = el.getBoundingClientRect();
        //     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        //     const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        //     const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        //     const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        //     return (vertInView && horInView);
        // }

        var count1 = new CountUp("counter", 0, 13, 0, 4, {
            separator: ",",
            decimal: "."
        });

        var count2 = new CountUp("counter-2", 0, 540, 0, 4, {
            separator: ",",
            decimal: "."
        });

        var count3 = new CountUp("counter-3", 0, 29, 0, 5, {
            separator: ",",
            decimal: "."
        });

        var count4 = new CountUp("counter-4", 0, 100, 0, 5, {
            separator: ",",
            decimal: "."
        });