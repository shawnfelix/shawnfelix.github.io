---
layout: default
title: The phelix-zero Build Process
date: 2025-05-05
permalink: /blog/phelix-zero-build-process/
thumbnail: /assets/blog/2025-05-05-phelix-zero-build-process/keyboard-assembly.png
tags: build-blog, phelix-zero
author: Shawn
excerpt: Problems. Problems. Problems. 
---
# The phelix-zero Build Process
<div>
Published: May 5th, 2025
<br>
by {{ page.author }}
</div>
<br>
<div>
<img src="/assets/blog/2025-05-05-phelix-zero-build-process/keyboard-assembly.png" alt="Keyboard Assembly" style="display:block;width:100%;max-width:100%;margin:0.1rem 0 0 0;border-radius:12px;box-shadow:0 2px 16px rgba(0,0,0,0.13);" />
<div style="text-align:left;font-size:0.92rem;color:var(--ph-light,#eaeaea);margin-bottom:1.5rem;margin-top:0.01rem;letter-spacing:0.01em;"><i>Assembly in progress: applying lube to the keyboard stabilizers</i></div>
</div>
When I set out to create my own keyboard from scratch, I had minimal experience with how much time loss can compound in the assembly phase, when you make mistakes in your design phase...

During the design phase of a product there are many times that you can run into an unexpected but minor flaw. A screw alignment issue that wasnt forseen 4 hours prior. A part that you assumed would fit that doesn't actually fit. The shape of a part that just doesn't look quite right. 

And in the back of your mind, you have a tiny subversive voice whispers: 

>
> "Hey, there's no need to redo all of the work you just completed! You can simply fix the issue after production with a minute or two of elbow grease and a good power tool!"
>

 **That tiny voice in your head is <ins>EVIL</ins>.** 


**NEVER** listen to that voice. *One thing small piece to sand here, a small joint to solder there, and your product will be good!* 

After struggling with manual labor-intensive tasks for countless hours while assembling my first batch of phelix-zero keyboards, I swore I never would listen to that voice again. 

Here is the comprehensive list of shortcuts I deeply regret:
- Acrylic case sanded matte finish (+1 hr per keyboard)
- Threaded inserts for sandwich layer standoffs (+2 hrs)
- Laser cut 2D with solvent bonding layers instead of CNC plastic case (+5 hrs)
- Not double checking my design files (+5 hrs)
- Not double checking my design files again after reordering parts (+2 hrs)
- Ordering the wrong parts (+30 mins)
- Not investing in laser cut foam layer (+1 hr)
- Not ordering prototype parts to check for fitment (+5 hrs)


Dear hobbyists, don't be like me. Be diligent in the design phase. 

Automate the assembly process as much as you possibly can.


[← Back to Blog Index]({{ '/blog/' | relative_url }})

<style>
/* Blog post paragraph and list width, font size, and spacing override */
.post-content p, .main-content p, .container p, .fluid-container p,
.post-content ul, .main-content ul, .container ul, .fluid-container ul,
.post-content ol, .main-content ol, .container ol, .fluid-container ol {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.13rem;
  line-height: 1.85;
  margin-bottom: 1.25em;
}

blockquote {
  border-left: 4px solid var(--ph-accent, #7ec4fa);
  background: rgba(60, 70, 90, 0.10);
  color: var(--ph-light, #eaeaea);
  margin: 1.2em auto;
  padding: 0.8em 1.2em 0.8em 1.4em;
  border-radius: 8px;
  font-size: 1.08rem;
  font-style: italic;
  max-width: 600px;
  line-height: 1.7;
}
blockquote > :last-child {
  margin-bottom: 0;
}

@media (max-width: 767.98px) {
  .post-content p, .main-content p, .container p, .fluid-container p,
  .post-content ul, .main-content ul, .container ul, .fluid-container ul,
  .post-content ol, .main-content ol, .container ol, .fluid-container ol {
    max-width: 100%;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    font-size: 1.04rem;
    line-height: 1.65;
    margin-bottom: 1.1em;
  }
  blockquote {
    max-width: 100%;
    padding: 0.7em 1em 0.7em 1.1em;
    font-size: 1.01rem;
    line-height: 1.5;
  }
}
</style>
