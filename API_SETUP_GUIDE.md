# Stock Price API Setup Guide

This guide will help you set up real-time stock price feeds for your equity analysis pages.

## 🚀 Quick Start (Works Out of the Box)

Your website already works with fallback pricing! The current implementation will:
1. Try multiple APIs in sequence
2. Fall back to market-based estimates if APIs fail
3. Show clear indicators when data is estimated

## 🔑 Get Real API Keys (Recommended)

### Alpha Vantage (Primary API)
**Best for:** Reliable data, good free tier, global coverage

1. **Sign up**: Go to [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. **Free tier**: 25 requests/day, 5 per minute
3. **Pricing**: $25/month for 75 requests/day
4. **Coverage**: Global markets including NSE/BSE

**Setup Steps:**
```javascript
// In each equity file, replace:
const apiKey = 'demo';
// With:
const apiKey = 'YOUR_ALPHAVANTAGE_KEY_HERE';
```

### EODHD (Alternative API)
**Best for:** Backup data source, European focus

1. **Sign up**: Go to [EODHD](https://eodhd.com/)
2. **Free tier**: 20 requests/day
3. **Pricing**: $19.99/month for unlimited
4. **Coverage**: Global markets, good Indian stock support

**Setup Steps:**
```javascript
// In fetchFromAlternativeAPI() function, replace:
const apiKey = 'demo';
// With:
const apiKey = 'YOUR_EODHD_KEY_HERE';
```

## 🎯 Tracked Stocks

| Company | Symbol | Exchange | Posting Price | Date |
|---------|--------|----------|---------------|------|
| Laurus Labs | `LAURUSLABS` | NSE | ₹542.00 | Jan 27, 2025 |
| Motilal Oswal | `MOTILALOF` | NSE | ₹595.00 | Apr 4, 2025 |
| Solara Active | `SOLARA` | NSE | ₹475.00 | Jun 9, 2025 |

## 🔧 Technical Implementation

### API Fallback Hierarchy

1. **Alpha Vantage** → Primary real-time data
2. **Yahoo Finance** → Secondary via proxy
3. **EODHD** → Tertiary alternative
4. **Market Estimates** → Intelligent fallback

### Smart Features

#### Market Hours Detection
- Auto-refreshes during Indian market hours (9:15 AM - 3:30 PM IST)
- Reduces unnecessary API calls outside trading hours

#### Sector-Specific Estimates
- **Pharma stocks**: Higher volatility, mixed trends
- **Financial services**: Growth trends, moderate volatility
- **Time-based calculations**: Realistic price movements

#### Error Handling
- Graceful degradation through API tiers
- Clear indicators for data source quality
- No broken displays if all APIs fail

## 🌐 CORS & Proxy Solutions

### Current Proxy Service
Using `api.allorigins.win` for Yahoo Finance API

### Alternative Proxy Options
```javascript
// Option 1: AllOrigins (current)
const proxyUrl = 'https://api.allorigins.win/raw?url=';

// Option 2: CORS Anywhere (if you set up your own)
const proxyUrl = 'https://your-cors-proxy.herokuapp.com/';

// Option 3: Direct API (if CORS headers are added)
const proxyUrl = '';
```

## 📊 Data Display Features

### Real-time Metrics
- **Current Price**: Live/estimated stock price
- **Change %**: Percentage change from posting
- **Annualized Return**: CAGR since posting date
- **Color Coding**: Green (positive), Red (negative), Gray (neutral)

### Data Quality Indicators
- `(est.)` - Third-party API estimate
- `(market est.)` - Mathematical market estimate
- No indicator - Real-time or high-confidence data

## 🚨 Rate Limiting

### Alpha Vantage Limits
- **Free**: 25 requests/day, 5/minute
- **Paid**: 75-1200 requests/day depending on plan
- **Status**: Check at [Alpha Vantage Status](https://status.alphavantage.co/)

### EODHD Limits
- **Free**: 20 requests/day
- **Paid**: Unlimited with fair use
- **Status**: Generally stable

### Yahoo Finance
- **Unofficial**: No official rate limits published
- **Proxy dependent**: Reliability varies by proxy service
- **Backup only**: Used as secondary source

## 🔍 Troubleshooting

### Common Issues

1. **API Key Invalid**
   - Verify key is correctly pasted
   - Check API provider dashboard for usage
   - Ensure key has required permissions

2. **CORS Errors**
   - Check proxy service status
   - Try alternative proxy URLs
   - Consider backend API proxy

3. **Rate Limit Exceeded**
   - Check daily usage on API dashboard
   - Implement client-side caching
   - Upgrade to paid tier if needed

4. **No Data Displayed**
   - Check browser console for errors
   - Verify symbol formats (`.NS` for Yahoo, `.BSE` for Alpha Vantage)
   - Test API endpoints manually

### Debug Mode
Add this to browser console to see API attempts:
```javascript
// Enable detailed logging
localStorage.setItem('debug', 'true');
// Reload page to see debug info
```

## 🚀 Production Optimization

### Performance Tips
1. **Cache responses** for 1-2 minutes to reduce API calls
2. **Batch requests** if you add more stocks
3. **Use WebSockets** for real-time data (paid plans)
4. **Implement retry logic** with exponential backoff

### Monitoring
- Set up alerts for API failures
- Monitor success rates across different APIs
- Track user experience metrics

### Scaling
- Consider dedicated backend service for API calls
- Implement database caching for historical data
- Use CDN for static assets

## 📞 Support

- **Alpha Vantage**: [support@alphavantage.co](mailto:support@alphavantage.co)
- **EODHD**: Available through their dashboard
- **Yahoo Finance**: Community support only (unofficial API)

## 🎯 Next Steps

1. **Get API keys** from Alpha Vantage (recommended)
2. **Update JavaScript files** with real API keys
3. **Test thoroughly** during market hours
4. **Monitor performance** and adjust as needed
5. **Consider paid tiers** for higher volume or more features 