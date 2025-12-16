<script>
  import SkillsPreview from "./SkillsPreview.svelte";
</script>

<div class="container">
    <div class="left_column">
        <div class="extra_padding"> 
            <p style="padding">December 16th, 2025</p>
        </div>

        <div class="center_contents">
            <img src="profile-picture(1).png" alt="profile" class="profile_picture">
        </div>
    </div>

    <div class="right_column">
        <div class="center_contents">
            <h1>Hello World!</h1>
        </div>

        <img src="../about-me-4.png" alt="about me" style="width: 100%">

        <div class="extra_30_padding">
            <div class="skills">
                <div class="curved-heading">
                    <h2 style="color: white; padding: 3px 20px 3px 20px"> Skills </h2>
                </div>
                
                <div style="padding: 10px 20px 10px 20px; background-color: white; border-radius: 8px;">
                    <SkillsPreview />
                </div>
            </div>
        </div>
    </div>
</div>