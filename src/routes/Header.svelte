<link rel="stylesheet" href="/styles/header.css">

<script>
    // @ts-nocheck
    import { browser } from '$app/environment';
    
    function handleScroll() {
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    }

    function ToggleMenu(){
        if (browser) {
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    }
</script>

<svelte:window on:scroll={handleScroll} />
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