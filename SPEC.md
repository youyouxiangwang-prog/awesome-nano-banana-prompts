# Nano Banana Pro Prompts Gallery - 小红书风格

## 1. Concept & Vision

将 Nano Banana Pro 的精选 Prompts 整理成小红书风格的瀑布流卡片展示。每个卡片展示 Prompt 的效果图片（全部图片），支持分类筛选，配有一键复制按钮。整体风格温馨、现代、移动端优先。

## 2. Categories (参考 youmind.com)

### Use Cases (用途)
- Profile / Avatar (头像)
- Social Media Post (社交媒体)
- Infographic / Edu Visual (信息图/教育)
- YouTube Thumbnail (YouTube缩略图)
- Comic / Storyboard (漫画/分镜)
- Product Marketing (产品营销)
- E-commerce Main Image (电商主图)
- Game Asset (游戏素材)
- Poster / Flyer (海报/传单)
- App / Web Design (App/网页设计)

### Style (风格)
- Photography (摄影)
- Cinematic / Film Still (电影/剧照)
- Anime / Manga (动漫)
- Illustration (插画)
- Sketch / Line Art (素描/线稿)
- Comic / Graphic Novel (漫画/图像小说)
- 3D Render (3D渲染)
- Chibi / Q-Style (Q版)
- Isometric (等距视角)
- Pixel Art (像素画)
- Oil Painting (油画)
- Watercolor (水彩)
- Ink / Chinese Style (水墨/中国风)
- Retro / Vintage (复古)
- Cyberpunk / Sci-Fi (赛博朋克)
- Minimalism (极简)

### Subjects (主题)
- Portrait / Selfie (人像/自拍)
- Influencer / Model (网红/模特)
- Character (角色)
- Group / Couple (群体/情侣)
- Product (产品)
- Food / Drink (美食)
- Fashion Item (时尚单品)
- Animal / Creature (动物/生物)
- Vehicle (交通工具)
- Architecture / Interior (建筑/室内)
- Landscape / Nature (风景/自然)
- Cityscape / Street (城市/街景)
- Diagram / Chart (图表)
- Text / Typography (文字/排版)
- Abstract / Background (抽象/背景)

## 3. Features

### 3.1 图片展示
- 每张卡片展示该Prompt的所有图片
- 可左右滑动查看
- 点击打开Lightbox全屏预览
- 显示图片数量

### 3.2 分类筛选
- 二级分类选择器
- 一级：Use Cases / Style / Subjects
- 二级：具体分类
- 支持多标签筛选

### 3.3 其他功能
- 搜索（标题/描述/Prompt内容）
- 语言筛选
- 复制Prompt
- 收藏功能

## 4. Technical

### 4.1 Categories Mapping
使用逗号分隔的多标签存储，例如：
```javascript
tags: ["profile-avatar", "photography", "portrait"]
```

### 4.2 Category Slugs
- profile-avatar, social-media, infographic, youtube-thumbnail
- comic-storyboard, product-marketing, ecommerce, game-asset, poster-flyer, app-design
- photography, cinematic, anime, illustration, sketch, comic, 3d-render, chibi, isometric, pixel-art, oil-painting, watercolor, ink-style, retro, cyberpunk, minimalism
- portrait, influencer, character, group, product, food, fashion, animal, vehicle, architecture, landscape, cityscape, diagram, typography, abstract

## 5. Data Structure
```javascript
{
  id: 1,
  title: "Prompt title",
  description: "Description...",
  prompt: "Full prompt text...",
  images: ["url1", "url2"],
  tags: ["category1", "category2"],
  language: "ZH"
}
```
