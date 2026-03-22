# Images Folder

This folder is organized for storing all website images and visual assets.

## Folder Structure

```
public/images/
├── hero/              # Hero section images
│   └── placeholder.jpg  # TODO: Replace with your hero image
├── sections/          # Other section images (create as needed)
├── icons/             # Icon images
└── logos/             # Logo images
```

## How to Add Your Hero Image

1. **Place your image** in the `/images/hero/` folder
2. **Replace the placeholder**: Rename your image to `placeholder.jpg` or update the filename in [Hero Section Component](../../src/components/sections/hero.tsx)
3. **Update the component**: If using a different filename, update this line in `hero.tsx`:
   ```typescript
   src="/images/hero/your-image-name.jpg"
   ```

## Image Recommendations

### Hero Image
- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or larger (2x for retina)
- **Use Case**: Main visual on hero section desktop view

## Building the Folder Structure

Create additional folders as needed:
- `sections/` - For images used in different page sections
- `icons/` - For icon assets
- `logos/` - For logo variants

## Notes
- Images in the `/public` folder are served statically
- Use Next.js `Image` component for optimization (already implemented)
- Ensure image files are optimized for web to maintain performance
