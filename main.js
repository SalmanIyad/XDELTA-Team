
        // theme switcher
        const input = document.querySelector(".theme-switcher input");

        input.addEventListener("change", (e) => {
            if (e.target.checked) {
                document.body.setAttribute("data-theme", "dark");
            } else {
                document.body.setAttribute("data-theme", "light");
            }
        });

        // top-scroller

        let el1 = document.querySelector(".top-scroller");
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // console.log(document.documentElement.scrollHeight);
        // console.log(document.documentElement.clientHeight);
        // console.log(height);

        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            el1.style.width = `${(scrollTop / height) * 100}%`;
            el2.style.height = `${(scrollTop / height) * 100}%`;
            el3.style.height = `${(scrollTop / height) * 100}%`;
        });

        // back to top button
        let backtotopBTN = document.querySelector(".backtotop");
            
        backtotopBTN.onclick = function(){
            document.documentElement.scrollTop = 0;
        };

    