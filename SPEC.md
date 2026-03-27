# Nano Banana Pro Prompts Gallery - 小红书风格

## 1. Concept & Vision

将 Nano Banana Pro 的精选 Prompts 整理成小红书风格的瀑布流卡片展示。每个卡片展示 Prompt 的效果图片，点击可全屏预览，配有一键复制按钮。整体风格温馨、现代、移动端优先。

**关键要求：图片必须能正常显示**

## 2. Design Language

### 2.1 Color Palette
- Primary: #FF6B6B (珊瑚粉)
- Secondary: #C44569 (深粉)
- Background: #FFF9F5 (暖白)
- Card: #FFFFFF (纯白)
- Text: #2D2D2D (深棕)
- Text Secondary: #666666 (灰色)
- Success: #6BCB77 (薄荷绿)

### 2.2 Typography
- Font: System fonts (PingFang SC, Hiragino Sans GB, Microsoft YaHei)
- Title: 600 weight
- Body: 400 weight

### 2.3 Layout
- 瀑布流布局 (CSS columns)
- 响应式: 4列(桌面) → 3列 → 2列 → 1列(手机)

## 3. Layout & Structure

### 3.1 Page Structure
```
┌─────────────────────────────────────┐
│  🍌 Nano Banana Pro Prompts    [🔍] [语言] │
├─────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  │
│  │     │  │     │  │     │  │     │  │
│  │ 图片 │  │ 图片 │  │ 图片 │  │ 图片 │  │
│  │     │  │     │  │     │  │     │  │
│  ├─────┤  ├─────┤  ├─────┤  ├─────┤  │
│  │标题  │  │标题  │  │标题  │  │标题  │  │
│  │描述  │  │描述  │  │描述  │  │描述  │  │
│  │[复制]│  │[复制]│  │[复制]│  │[复制]│  │
│  └─────┘  └─────┘  └─────┘  └─────┘  │
└─────────────────────────────────────┘
```

### 3.2 Card Structure
```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │                       │  │
│  │      图片展示          │  │
│  │    (固定高度200px)     │  │
│  │                       │  │
│  │  [🔍 预览]  📷 4张    │  │
│  └───────────────────────┘  │
│                             │
│  #tag1 #tag2 #tag3          │
│                             │
│  标题（最多2行）             │
│  描述文字（最多3行）         │
│                             │
│  ┌───────────────────────┐  │
│  │ Prompt代码...         │  │
│  └───────────────────────┘  │
│                             │
│  [📋 复制]  [❤️ 收藏]       │
└─────────────────────────────┘
```

## 4. Features & Interactions

### 4.1 Core Features

**A. 图片展示**
- 每张卡片显示1张预览图
- 图片高度固定200px，宽度自适应
- 显示图片数量标签 (📷 4)
- 显示"🔍 预览"按钮

**B. 图片预览 (Lightbox)**
- 点击"预览"按钮打开全屏预览
- 显示所有图片（支持切换）
- 左右箭头导航
- 底部图片计数 (1/4)
- ESC键关闭
- 点击背景关闭

**C. 复制功能**
- 点击"复制"按钮复制完整Prompt
- 按钮状态：默认 → 复制中 → 已复制(绿色)
- Toast提示复制结果

**D. 搜索过滤**
- 搜索框：支持搜索标题/描述/Prompt内容
- 语言筛选：全部/中文/英文/日文/德文

**E. 收藏功能**
- 本地存储收藏的Prompt ID
- 按钮状态切换

### 4.2 图片加载问题排查

**已知问题：图片可能不显示**

可能原因：
1. 图片域名 `cms-assets.youmind.com` 有防盗链
2. GitHub Pages 环境下CORS问题
3. 图片URL失效

**解决方案：**
- 使用 `loading="lazy"` 延迟加载
- 图片加载失败时显示占位图
- 验证图片URL可访问性

## 5. Component Inventory

### 5.1 Card
- 默认：白色背景，轻微阴影
- Hover：上浮4px，阴影加深

### 5.2 Image
- Loading：灰色占位背景
- Loaded：显示图片
- Error：显示占位SVG "图片加载失败"

### 5.3 Preview Button
- 默认：半透明黑色背景，"🔍 预览"
- Hover：更不透明

### 5.4 Lightbox
- 全屏黑色遮罩 (rgba(0,0,0,0.95))
- 白色关闭按钮 (×)
- 灰色导航按钮 (‹ ›)
- 白色计数文字

### 5.5 Copy Button
- 默认：#FF6B6B 背景，白色文字
- Success：#6BCB77 背景，"✓ 已复制"

### 5.6 Toast
- Success：#6BCB77 背景
- Error：#FF6B6B 背景
- 2秒后自动消失

## 6. Technical Approach

### 6.1 Stack
- 纯HTML + CSS + JavaScript
- 无框架依赖
- CSS Columns 实现瀑布流

### 6.2 Image Handling
```javascript
// 图片必须设置 src 属性
<img src="https://example.com/image.jpg" alt="...">

// 不要用 data-src，要直接用 src
// loading="lazy" 让浏览器自动处理懒加载
```

### 6.3 Data Structure
```javascript
const prompts = [
  {
    id: 1,
    title: "标题",
    description: "描述",
    prompt: "Prompt文本",
    images: ["url1", "url2"],  // 图片URL数组
    tags: ["tag1", "tag2"],
    language: "ZH"
  }
]
```

## 7. Data (Featured Prompts)

```javascript
const prompts = [
  {
    id: 1,
    title: "Wide quote card with portrait",
    description: "生成名人名言卡片...",
    prompt: "A wide quote card featuring...",
    images: [
      "https://cms-assets.youmind.com/media/1763886933714_5zqn1e_G6QBjQHbgAE3Yt_.jpg",
      "https://cms-assets.youmind.com/media/1763886938314_wbcfc7_G6QBiiracAInQ8z.jpg"
    ],
    tags: ["quote", "portrait"],
    language: "ZH"
  }
  // ... 更多prompts
]
```

## 8. Acceptance Criteria

### 8.1 Must Work
- [ ] 图片在页面上正确显示
- [ ] 点击预览可打开Lightbox
- [ ] 复制按钮可复制Prompt
- [ ] 搜索和筛选功能正常

### 8.2 Image Debug Checklist
- [ ] 检查浏览器控制台是否有图片404错误
- [ ] 检查图片URL是否可访问 (curl测试)
- [ ] 如果防盗链，考虑用代理或内联图片
- [ ] 提供备用占位图
