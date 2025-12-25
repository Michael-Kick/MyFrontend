# Design Revision Context - Resume Later

## User Request
"I want you to do a design revision of the whole website. I want it to look modern and simple"

## Current State Analysis

### Site Structure
- **Home** - `/src/app/page.tsx` - Hero section with welcome, title, CTAs
- **About** - `/src/app/about/page.tsx` - Bio using BlogLayout
- **Projects** - `/src/app/projects/page.tsx` - Portfolio grid (4 projects)
- **Resume** - `/src/app/resume/page.tsx` - Work experience & education with PDF export
- **Contact** - `/src/app/contact/page.tsx` - Contact form with validation
- **Settings** - `/src/app/settings/page.tsx` - Theme switcher (System/Light/Dark/Professional)

### Layout Structure
```
<html>
  <body className="bg-background font-montserrat">
    <Providers>
      <Navbar/>
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 pt-8 md:pt-16 pb-8 md:pb-16">
        {children}
      </main>
      <Footer/>
    </Providers>
  </body>
</html>
```

### Theme System (globals.css)
4 themes with CSS variables:
- **Light** - teal primary (#0f766e), light slate background (#f8fafc)
- **Dark** - bright teal primary (#2dd4bf), very dark background (#0b1220)
- **Professional** - ink/navy primary (#0f172a), white background

### Key Components to Redesign
```
/src/app/_components/
├── navbar/Navbar.tsx          - Navigation with mobile hamburger
├── navbar/NavLink.tsx         - Nav link styling
├── projects/ProjectList.tsx   - Grid container
├── projects/ProjectCard.tsx   - Individual card
├── projects/SkillTag.tsx      - Skill badges
├── Hero.tsx                   - Landing section (two-column layout)
├── BlogLayout.tsx             - About page card wrapper
├── BlogContent.tsx            - Article content
├── Headline.tsx               - Section titles (responsive 3xl-7xl)
├── Footer.tsx                 - Footer with socials & back-to-top
├── ResumeElement.tsx          - Timeline component with left border
├── WorkDetails.tsx            - Work experience details
├── EducationDetails.tsx       - Education details
├── CustomizedButton.tsx       - CTA button
├── CustomizedInput.tsx        - Form input
└── LiIcon.tsx                 - List icon
```

### Tailwind Config
- Custom font sizes: base=20px, lg=25px, xl=30px
- Fonts: jetbrains (monospace), montserrat (sans-serif)
- Dark mode: class-based
- Uses "fluid-tailwind" plugin

### Current Design Issues
- Some components feel cluttered (m-12 on cards, text-8xl headings)
- Inconsistent spacing patterns
- Timeline resume could be cleaner
- Hero section is functional but could be more impactful

## Design Direction: Modern & Simple

### Principles to Apply
1. **More whitespace** - generous padding, breathing room
2. **Subtle animations** - smooth transitions, micro-interactions
3. **Clean typography** - better hierarchy, consistent sizes
4. **Minimal color use** - rely on spacing/typography over color
5. **Card simplification** - less border emphasis, subtle shadows
6. **Consistent spacing scale** - use Tailwind's spacing consistently

### Files to Modify
1. `globals.css` - refine theme colors, add subtle animations
2. `tailwind.config.js` - adjust spacing/sizing if needed
3. `layout.tsx` - adjust main container spacing
4. `Navbar.tsx` - cleaner navigation style
5. `Hero.tsx` - more impactful hero section
6. `ProjectCard.tsx` - simpler card design
7. `ResumeElement.tsx` - cleaner timeline
8. `Footer.tsx` - minimal footer
9. `Headline.tsx` - refined typography
10. `CustomizedButton.tsx` - modern button style
11. `CustomizedInput.tsx` - cleaner form inputs
12. All page files for layout adjustments

## Next Steps
1. Ask user about specific preferences (color scheme, animation level, etc.)
2. Create detailed implementation plan
3. Start with globals.css and work outward to components
4. Test responsiveness at each step

---
*Resume this task by reading this file and continuing the design revision planning.*
