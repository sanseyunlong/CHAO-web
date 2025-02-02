# Chaohub AI Omniverse 官方网站

这是 Chaohub AI Omniverse（巢湖人工智能全维空间）的官方网站项目。

## 功能特点

- 响应式设计，支持各种设备
- 现代化的UI界面
- 粒子动画效果
- 联系表单功能
- 完整的企业展示系统

## 技术栈

- 后端：Flask
- 前端：TailwindCSS
- 数据库：SQLite（开发）/ PostgreSQL（生产）
- 服务器：Gunicorn + Nginx

## 本地开发

1. 克隆项目：
```bash
git clone [项目地址]
cd chaohub-website
```

2. 创建虚拟环境：
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. 安装依赖：
```bash
pip install -r requirements.txt
```

4. 初始化数据库：
```bash
flask db init
flask db migrate
flask db upgrade
```

5. 运行开发服务器：
```bash
flask run
```

## 生产环境部署

1. 安装必要的系统包：
```bash
sudo apt update
sudo apt install python3-pip python3-dev nginx
```

2. 安装项目依赖：
```bash
pip install -r requirements.txt
```

3. 配置 Gunicorn：
```bash
gunicorn -c gunicorn_config.py app:app
```

4. 配置 Nginx：
```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

5. 启动服务：
```bash
sudo systemctl start nginx
gunicorn -c gunicorn_config.py app:app
```

## 环境变量配置

创建 `.env` 文件并设置以下变量：

```
FLASK_ENV=production
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@localhost/dbname
```

## 维护说明

- 定期备份数据库
- 检查日志文件
- 更新依赖包
- 监控服务器状态

## 联系方式

如有问题，请联系：contact@chaohub.ai 