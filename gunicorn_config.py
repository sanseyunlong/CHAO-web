import multiprocessing

# 绑定的IP和端口
bind = "0.0.0.0:8000"

# 工作进程数
workers = multiprocessing.cpu_count() * 2 + 1

# 工作模式
worker_class = 'sync'

# 最大客户端并发数量
worker_connections = 1000

# 进程名称
proc_name = 'chaohub_gunicorn'

# 进程pid记录文件
pidfile = 'gunicorn.pid'

# 日志配置
accesslog = 'access.log'
errorlog = 'error.log'
loglevel = 'info' 