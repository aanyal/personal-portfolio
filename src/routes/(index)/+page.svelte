<script>
    // @ts-nocheck

    import SkillsPreview from "./SkillsPreview.svelte";
    import ProjectPreview from "./ProjectPreview.svelte";
    import eachSkill from './skills_data.json';
    import { browser } from '$app/environment';
    
    let skillEnteries = Object.entries(eachSkill) 

    /**
     * Chunks an array into smaller arrays of a specified size.
     * @param {Array<Object>} arr - The original array.
     * @param {number} size - The size of each chunk.
     * @returns {Array<Array<Object>>} The chunked array.
     */
    function chunkData(arr, size) {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size))
        }
        return chunkedArray;
    }

    const chunckedSkillEnteries = chunkData(skillEnteries, 2);
    const coords = {x: 0, y: 0}

    let inactivityTimer;                                   //timer to make the swoosh dissapear after a period of mouse inactivity
    const INACTIVITY_THRESHOLD = 15;                          //make the swoosh dissapear if the mouse is inactive for 40ms

    function handleScroll() {
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    }

    function hideElement() {
        let allCircles = document.querySelectorAll(".circle");
        allCircles.forEach(function(circle) {
            circle.style.opacity = 0;
        });
    }

    function handleMouseMove(e) {
        coords.x = e.clientX;               //updates the coordinates of the mouse
        coords.y = e.clientY;
        
        if (browser) {
            let allCircles = document.querySelectorAll(".circle");
                
            clearTimeout(inactivityTimer);      //reset the timer to decide whether to fade out the mouse
            allCircles.forEach(function(circle) {
                circle.style.opacity = 1;       //ensure everything is visible when the mouse is moving
            });
            inactivityTimer = setTimeout(hideElement, INACTIVITY_THRESHOLD); //set a 40ms timer
        }
    }
    function ToggleMenu(){
        if (browser) {
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    }
    
    if (browser) {
        const colors = [    //colors for the swoosh
            "#003f5b",
            "#2b4b7d", 
            "#5f5195", 
            "#98509d", 
            "#cc4c91",
            "#f25375", 
            "#ff6f4e",  
            "#ff9913", 
        ]
        const circles = document.querySelectorAll(".circle");

        let numColor = Math.ceil(circles.length/colors.length);         //decide the coloring of the swoosh
        let i = 0;                                                      //for the coloring of the swoosh

        //initializer sort of, sets the x and y or each circle to 0
        circles.forEach(function(circle, index) {
            circle.x = 0;
            circle.y = 0;
            
            circle.style.backgroundColor = colors[Math.ceil(index/numColor)];

            if (i%numColor == 0 && index != 0) {
                i+=1;
            }
        });

        //hides the circles if the mouse has been inactive for 30 ms

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";  //center all the circles to the coordinates of the mouse
                circle.style.top = y + 12 + "px";

                circle.style.scale = (circles.length-index)/circles.length; //change the scale of the circles to fade out

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.2; //move the circles back a little bit
                y += (nextCircle.y - y) * 0.2;
            });

            requestAnimationFrame(animateCircles); //to ensure the animation finishes even if the cursor stops moving or 
            //the cursor goes off screen
        }

        animateCircles();
    }
</script>

<svelte:window on:scroll={handleScroll} on:mousemove={handleMouseMove} />
<div class = "name-section" id="home">
    <section>
        <header>
            <a href="#hello" class="logo">Aanya Lakhani</a>
            <nav class="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#hello">Experience</a></li>
                    <li><a href="#hello">Portfolio</a></li>
                </ul>
            </nav>
            <button class="menuToggle" on:click={ToggleMenu()}>hello</button>
        </header>

        <p style="padding-bottom: 30px"> Hello World! My name is </p>
        <div>
            <h1><span class="text-spacer"></span><span class="top-name">AANYA</span></h1> 
            
            <h1 class="bottom-name">LAKHANI</h1>
        </div>
    </section>

</div>

<section id="about" class="general-section container">
    <div class="left-column">
        <img src="profile-picture(3).jpeg" alt="profile" class="profile-picture">
    </div>
    <div class="right-column">
        <div>
            <h2>About Me</h2>

            <p>Sophomore at UC Irvine proficient in Java, C++, and Python through rigorous coursework, internships, and hands-on
    projects. Skilled in Adobe Creative Suite, with experience in digital marketing and media development. Exceptional
    communication skills, meticulous attention to detail, and ability to thrive in a team environment. </p>
        </div>
        
    </div>
</section>

<br>
<br>
<hr />
<br>
<br>

<section id="skills" class="general-section container">
    <div class="each-section">
        <h2>Skills</h2>
        <div class="contents">
            {#each chunckedSkillEnteries as skillChunk, i}
                <div class="container">

                {#each skillChunk as [key, value], i}
                    <SkillsPreview 
                        logo_link={value.logo}
                        skill_name={value.name}
                        skill_experience={value.experience}
                    />
                    {#if i%2 == 0}
                        <div style="width:80px"></div>
                    {/if}
                {/each}
                
                {#if i < chunckedSkillEnteries.length-1}
                    <div style="height:80px"></div>
                {/if}
                    
                </div>
            {/each}
        </div>
    </div>
</section>

<br>
<br>
<hr />
<br>
<br>

<section id="portfolio" class="general-section container">
    <div class="each-section">
        <h2>Portfolio</h2>
        <div class="contents" style="display:flex; flex-direction: rows; ">
            <ProjectPreview direction="left"/>
            <ProjectPreview direction="middle"/>
            <ProjectPreview direction="right"/>
        </div>
    </div>
</section>

<div class="cursor">

    {#each {length: 38} as _, i}
        <div class="circle"></div>
    {/each}

</div>
    