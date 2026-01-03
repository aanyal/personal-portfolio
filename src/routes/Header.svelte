<script>
    // @ts-nocheck
    import { browser } from '$app/environment';
    
    function handleScroll() {
        var header = document.querySelector("header");
        var toggleButton = document.getElementById("toggleMenu");

        header.classList.toggle('sticky', window.scrollY > 0);
        toggleButton.classList.toggle('sticky', window.scrollY > 0);
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
<header>
    <a href="/" class="logo">Aanya Lakhani</a>
    <nav class="navigation">
        <ul>
            <li><a href="#home" on:click={ToggleMenu}>Home</a></li>
            <li><a href="#about" on:click={ToggleMenu}>About</a></li>
            <li><a href="#skills" on:click={ToggleMenu}>Skills</a></li>
            <li><a href="#portfolio" on:click={ToggleMenu}>Portfolio</a></li>
        </ul>
    </nav>
    <button class="menuToggle" id="toggleMenu" on:click={ToggleMenu}> </button>
</header>