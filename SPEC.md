# Nano Banana Pro Prompts - 小红书风格展示页

## 1. Concept & Vision

将 Nano Banana Pro 的 Prompt 库重新整理成小红书风格的瀑布流卡片布局。每个卡片展示一张图片和对应的 Prompt，配有一键复制按钮，方便用户快速获取和使用这些 Prompt。整体风格温馨、现代、适合移动端浏览。

## 2. Design Language

### 2.1 Aesthetic Direction
- **风格**: 小红书瀑布流 + 卡片式设计
- **感觉**: 温馨、实用、轻松愉悦的浏览体验

### 2.2 Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Primary | Coral Pink | #FF6B6B |
| Secondary | Soft Purple | #C44569 |
| Accent | Golden Yellow | #FFD93D |
| Background | Warm White | #FFF9F5 |
| Card Background | Pure White | #FFFFFF |
| Text Primary | Dark Brown | #2D2D2D |
| Text Secondary | Gray | #666666 |
| Success | Mint Green | #6BCB77 |
| Border | Light Gray | #EEEEEE |

### 2.3 Typography
- **Primary Font**: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif
- **Heading**: 600 weight, 1.2 line-height
- **Body**: 400 weight, 1.6 line-height
- **Prompt Text**: 14px, monospace for copy area

### 2.4 Spatial System
- **Card Gap**: 16px
- **Card Padding**: 16px
- **Card Border Radius**: 16px
- **Image Border Radius**: 12px
- **Button Border Radius**: 20px

### 2.5 Motion Philosophy
- **Card Hover**: translateY(-4px), box-shadow increase, 200ms ease
- **Copy Button**: scale(0.95) on press, success checkmark animation
- **Image Load**: fade-in 300ms
- **Toast Notification**: slide-up + fade, 2s duration

## 3. Layout & Structure

### 3.1 Page Structure
```
┌─────────────────────────────────────┐
│           Header (Fixed)            │
│  🖼️ Nano Banana Pro Prompts         │
│  [搜索框] [分类筛选]                 │
├─────────────────────────────────────┤
│                                     │
│   ┌─────┐  ┌─────┐  ┌─────┐       │
│   │Card │  │Card │  │Card │       │
│   │  1  │  │  2  │  │  3  │       │
│   └─────┘  └─────┘  └─────┘       │
│                                     │
│   ┌─────┐  ┌─────┐  ┌─────┐       │
│   │Card │  │Card │  │Card │       │
│   │  4  │  │  5  │  │  6  │       │
│   └─────┘  └─────┘  └─────┘       │
│                                     │
└─────────────────────────────────────┘
```

### 3.2 Card Structure
```
┌─────────────────────────────┐
│                             │
│      [图片区域]              │
│      宽度: 100%             │
│      高度: auto             │
│                             │
├─────────────────────────────┤
│  #分类标签  #分类标签        │
├─────────────────────────────┤
│  Prompt描述文字...          │
│  （最多显示3行，可展开）     │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │ Prompt代码区域         │  │
│  │ （可滚动，最大3行）     │  │
│  └───────────────────────┘  │
├─────────────────────────────┤
│  [📋 复制Prompt]  [❤️ 收藏]  │
└─────────────────────────────┘
```

### 3.3 Responsive Strategy
- **Desktop (>1024px)**: 4列瀑布流
- **Tablet (768-1024px)**: 3列瀑布流
- **Mobile (<768px)**: 2列瀑布流
- **Small Mobile (<480px)**: 1列卡片

## 4. Features & Interactions

### 4.1 Core Features
1. **瀑布流展示**: Masonry 布局展示所有 Prompt 卡片
2. **图片懒加载**: 进入视口时才加载图片
3. **一键复制**: 点击按钮复制完整 Prompt
4. **分类筛选**: 按语言/类型筛选卡片
5. **搜索功能**: 搜索 Prompt 内容
6. **收藏功能**: 本地存储收藏的 Prompts

### 4.2 Interaction Details

**复制按钮点击:**
1. 点击 → 按钮变为加载状态
2. 复制成功 → 按钮变绿，显示 "✓ 已复制"
3. 显示 Toast 提示 "已复制到剪贴板"
4. 2秒后恢复原状态

**卡片 Hover:**
1. 卡片微微上浮 (-4px)
2. 阴影加深
3. 图片轻微放大 (1.02x)

**图片加载:**
1. 显示灰色占位背景
2. 图片加载完成 → fade-in 动画
3. 加载失败 → 显示占位图标

### 4.3 Edge Cases
- 空搜索结果: 显示 "没有找到相关 Prompt"
- 图片加载失败: 显示默认占位图
- 复制失败: 显示 "复制失败，请手动选择"

## 5. Component Inventory

### 5.1 Header
- Logo/标题
- 搜索输入框
- 分类筛选下拉

### 5.2 PromptCard
**States:**
- Default: 白色背景，轻微阴影
- Hover: 上浮，增加阴影
- Loading: 图片区域显示骨架屏

### 5.3 CopyButton
**States:**
- Default: 灰色背景，"📋 复制"
- Hover: 主色调背景
- Active: scale(0.95)
- Success: 绿色背景，"✓ 已复制"
- Loading: 显示 spinner

### 5.4 ImageLazy
**States:**
- Loading: 灰色背景 + 闪烁动画
- Loaded: 显示图片
- Error: 显示占位图标

### 5.5 Toast
- Success: 绿色背景
- Error: 红色背景
- 2秒后自动消失

## 6. Technical Approach

### 6.1 Stack
- 纯 HTML + CSS + JavaScript
- 无框架依赖
- CSS Grid + Flexbox 布局
- Intersection Observer 实现懒加载

### 6.2 Data Structure
```javascript
const prompts = [
  {
    id: 1,
    title: "Wide quote card with portrait",
    description: "A prompt for generating...",
    prompt: "A wide quote card featuring...",
    images: ["url1.jpg", "url2.jpg"],
    tags: ["quote", "portrait", "ZH"],
    author: "Nicolechan",
    source: "Twitter",
    language: "ZH"
  },
  // ...
]
```

### 6.3 Key Implementation
- CSS Columns 实现瀑布流
- Clipboard API 复制文本
- LocalStorage 存储收藏
- Debounce 搜索输入
