# 陈文明 · 简历

> 运维开发 / AI Engineer —— 10 年运维经验，Python / Go 双栈，专注云原生与 AI Agent 落地

[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](https://go.dev/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat&logo=langchain&logoColor=white)](https://www.langchain.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white)](https://vuejs.org/)

[🖥 在线预览](https://www.zops.org.cn/) · [📄 下载 PDF](./陈文明的简历.pdf) · [🐙 GitHub](https://github.com/ZebraOps)

## 关于我

全栈运维开发工程师，10 年运维经验，主导企业级运维平台与微服务架构完整落地；近一年深耕 AI Agent & RAG，探索 LLM 在智能运维场景的落地。当前在职、看新机会。

## 核心技能

- **语言 / 框架**：Python（Django / Flask / FastAPI）、Go（Gin / go-zero）、Vue.js + iView
- **AI / LLM**：LangChain / LangGraph、RAG、Hermes Agent（Skill 沉淀 / MCP 接入）、Ollama / llama.cpp
- **云原生 / DevOps**：Kubernetes、Docker、Nacos、CI/CD（Jenkins / GitLab CI / Tekton / Harbor）
- **可观测性**：Prometheus + Grafana、SkyWalking、ELK
- **云平台 / 中间件**：阿里云（SLS / MQ / Kafka / ES / LB / OSS）、PostgreSQL、Redis、Nginx

## 代表项目

- **斑马运维平台 [ZebraOps](https://github.com/ZebraOps)** —— 企业级开源运维技术生态，微服务架构，覆盖权限管理（RBAC）、CI/CD 编排、运维知识库（RAG）与智能助手。

## 仓库结构

| 路径 | 说明 |
|------|------|
| `index.html` / `styles.css` / `script.js` | 在线简历网页（单页、响应式） |
| `resume-print.html` | 打印版简历源文件（A4 排版） |
| `陈文明的简历.pdf` | 打印版简历 PDF（下载用） |

> 说明：在线网页（`index.html`）与打印版（`resume-print.html`）是两份独立内容，修改时需分别同步。

## 本地运行 / 生成 PDF

在线简历是纯静态页面，无需构建：

```bash
python3 -m http.server 8000   # 浏览器打开 http://localhost:8000
```

修改 `resume-print.html` 后重新生成 PDF：

```bash
google-chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="陈文明的简历.pdf" "file://$PWD/resume-print.html"
```

## 联系方式

- 📧 邮箱：1484423781@qq.com
- 💬 微信：扫码添加（[查看二维码](./wechat.png)）
- 🐙 GitHub：[@ZebraOps](https://github.com/ZebraOps)
