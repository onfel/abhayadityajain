# Abhay Jain's Portfolio Website

A personal website featuring investment analysis, thoughts, and professional information optimized for "Abhay Jain" SEO.

## Features

### 🎯 SEO Optimization
- **Keyword-optimized** for "Abhay Jain" across all pages
- **Structured data** (JSON-LD) for enhanced search visibility
- **Open Graph** and Twitter Card meta tags
- **Canonical URLs** and proper meta descriptions

### 📊 Live Stock Price Integration
Real-time stock price tracking for equity analysis posts with **multi-tier API fallback system**:

#### Primary API: Alpha Vantage
- **Free tier**: 25 requests/day, 5 per minute
- **Coverage**: Global markets including Indian stocks (NSE/BSE)
- **Reliability**: High-quality financial data provider

#### Secondary API: Yahoo Finance
- **Backup solution** using proxy service
- **Real-time data** for NSE-listed stocks
- **Format**: Uses `.NS` suffix for NSE symbols

#### Tertiary API: EODHD
- **Alternative source** for market data
- **Delayed data** available on free tier
- **Format**: Uses `.NSE` suffix for Indian stocks

#### Smart Fallback System
- **Market-based estimates** when APIs fail
- **Sector-specific trends** applied to each stock
- **Time-based volatility** calculations
- **Clear indicators** when showing estimated vs real data

### 📈 Tracked Stocks
1. **Laurus Labs** (`LAURUSLABS`) - Pharmaceutical/CDMO
2. **Motilal Oswal** (`MOTILALOF`) - Financial Services
3. **Solara Active** (`SOLARA`) - Specialty Pharma

### 🏗️ Technical Implementation

#### API Configuration
```javascript
// Example for production - replace 'demo' with actual API keys
const alphavantageKey = 'YOUR_ALPHA_VANTAGE_KEY';
const eodhKey = 'YOUR_EODHD_KEY';
```

#### Price Calculation Features
- **Real-time price updates**
- **Percentage change** from posting price
- **Annualized returns** calculation
- **Color-coded indicators** (green/red/neutral)
- **Posting date tracking** for accurate return calculations

### 🔧 Setup Instructions

1. **Get API Keys** (optional but recommended):
   - [Alpha Vantage](https://www.alphavantage.co/support/#api-key) - Free tier available
   - [EODHD](https://eodhd.com/) - Free tier available

2. **Update API Keys** in each equity analysis file:
   ```javascript
   // Replace 'demo' with your actual API key
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

3. **Deploy** to any static hosting service (GitHub Pages, Netlify, Vercel)

### 📱 Responsive Design
- **Mobile-first** approach
- **Dark theme** with purple accent colors
- **Typography**: Times New Roman for readability
- **Performance optimized** with minimal external dependencies

### 🚀 Performance Features
- **Parallel API calls** for faster loading
- **Error handling** with graceful degradation
- **Caching-friendly** structure
- **Lightweight** vanilla JavaScript implementation

## File Structure

```
├── index.html              # Homepage - Abhay Jain profile
├── ledger.html             # Blog index page
├── laurus-labs.html        # Laurus Labs stock analysis
├── motilal-oswal.html      # Motilal Oswal stock analysis
├── solara-active.html      # Solara Active stock analysis
├── digital-disorder.html   # Thought leadership content
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
└── README.md              # This file
```

## Analytics & Tracking
- **Google Analytics 4** integration
- **Performance monitoring** for stock price fetching
- **User experience** tracking

## License
Personal portfolio website © 2025 Abhay Jain 