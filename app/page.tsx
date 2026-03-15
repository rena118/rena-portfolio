"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "education", label: "教育背景" },
  { id: "projects", label: "项目经历" },
  { id: "internships", label: "实习经历" },
  { id: "skills", label: "技能证书" },
  { id: "activities", label: "活动经历" },
  { id: "chat", label: "和我聊聊 AI" },
  { id: "contact", label: "联系方式" }
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 bg-gradient-to-b from-indigo-500/30 via-slate-950/0 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-500/25 via-emerald-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-[-6rem] h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/10 to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <Header />
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Internships />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Activities />
        </Reveal>
        <Reveal>
          <AiChat />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-4 z-30 mb-10 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 backdrop-blur-sm sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-xs font-semibold tracking-tight text-slate-950 shadow-soft">
            RW
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-slate-100">
              Rena Wang
            </span>
            <span className="text-[11px] text-slate-400">
              软件工程学士 / 工程管理硕士
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative whitespace-nowrap transition-colors hover:text-slate-50"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 rounded-full border border-indigo-500/60 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-100 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-50"
        >
          联系我
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="basic"
      className="mb-14 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] md:items-center"
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            王娜
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
            <span>产品经理</span>
            <span className="text-slate-500">·</span>
            <span>项目管理</span>
            <span className="text-slate-500">·</span>
            <span>物流工程与管理硕士</span>
            <span className="text-slate-500">·</span>
            <span>26 届校招</span>
          </div>
          {/* <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            我是一名物流工程与管理方向的研究生，具备软件工程与英语双学位背景，
            结合产品思维与技术理解，专注于 AI 与运筹优化在实际业务场景中的落地。
          </p> */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            <Tag>INTJ</Tag>
            <Tag>快速学习者</Tag>
            <Tag>结果导向</Tag>
            <Tag>细节控</Tag>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-6 py-2 text-sm font-medium text-slate-950 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_22px_55px_rgba(15,23,42,0.9)]"
          >
            查看我的项目
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2 text-sm font-medium text-slate-100 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-slate-500 hover:bg-slate-800/80"
          >
            联系我
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-400">
          <Tag>边牧</Tag>
          <Tag>旅游</Tag>
          <Tag>粤语</Tag>
          <Tag>韩语</Tag>
          <Tag>刑侦</Tag>
          <Tag>跳舞</Tag>
          <Tag>反差感</Tag>
          <Tag>蓝调时刻</Tag>
          <Tag>R&B</Tag>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl sm:-left-8 sm:top-10" />
        <div className="pointer-events-none absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 p-[1px] shadow-soft">
          <div className="h-full rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Profile Snapshot
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  AI 产品经理 · 工程管理
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right text-xs text-slate-400">
                <span className="rounded-full bg-slate-900/80 px-3 py-1">
                  人工智能 & 运筹优化
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1">
                  研究 & 产品双背景
                </span>
              </div>
            </div>
            <dl className="space-y-3 text-xs text-slate-300 sm:text-sm">
              <InfoRow label="当前身份" value="工程管理硕士研究生" />
              <InfoRow label="核心方向" value="AI + 运筹优化、机器学习与决策优化融合" />
              <InfoRow label="研究主题" value="应急救援资源调度、随机森林预测与调度优化" />
              <InfoRow
                label="产品视角"
                value="将复杂算法抽象为清晰的产品能力与业务价值"
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="教育背景"
        subtitle="扎实的软件工程与物流工程基础，辅修英语第二学位。"
      />
      <div className="space-y-6 text-sm text-slate300">
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                北京工商大学 · 计算机与人工智能学院
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                物流工程与管理 工程管理学硕士
              </p>
            </div>
            <span className="text-xs text-slate-400">2023.09 - 2026.06</span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300 sm:justify-start">
            <Tag>工程信息管理</Tag>
            <Tag>定量分析：模型与方法</Tag>
            <Tag>工程系统建模与仿真</Tag>
            <Tag>工程经济学</Tag>
            <Tag>高等工程统计学</Tag>
            <Tag>金融数据挖掘与可视化</Tag>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                陕西师范大学（211/双一流）
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                软件工程 工学学士
              </p>
            </div>
            <span className="text-xs text-slate-400">2017.09 - 2021.06</span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300 sm:justify-start">
            <Tag>离散数学</Tag>
            <Tag>C 语言程序设计</Tag>
            <Tag>面向对象程序设计</Tag>
            <Tag>Java 语言程序设计</Tag>
            <Tag>数据结构</Tag>
            <Tag>软件工程</Tag>
            <Tag>数据库原理</Tag>
            <Tag>数据库应用</Tag>
            <Tag>操作系统</Tag>
            <Tag>计算机网络</Tag>
            <Tag>软件过程与项目管理</Tag>
            <Tag>Web 信息系统设计与开发</Tag>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                陕西师范大学 · 英语第二学位
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                英语 文学学士（辅修）
              </p>
            </div>
            <span className="text-xs text-slate-400">2018.09 - 2021.06</span>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="项目经历"
        subtitle="参与多类行业项目，从需求分析、原型设计到前端开发与模型落地。"
      />
      <div className="space-y-6 text-sm text-slate-300">
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <h3 className="text-sm font-semibold text-slate-100">
              阳泉综合交通运行监测与协调指挥中心项目
            </h3>
            <span className="text-xs text-slate-400">2023.06 - 2025.06</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                需求分析与功能设计：
              </span>{" "}
              挖掘“共享电单车决策子系统”的核心需求，负责定义和设计系统功能点，
              配合团队填补需求漏洞。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                原型设计与用户体验优化：
              </span>{" "}
              主导指挥系统数字大屏中“旅游包车”“危险品运输”“重载货车”等子系统的原型设计，
              使用墨刀与 Figma 进行界面设计与交互优化。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                API 设计与后端协作：
              </span>{" "}
              负责为子系统中的决策模型与前端界面设计交互 API，撰写 API 文档，
              协同后端实现模型与前端数据流的高效对接。
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <h3 className="text-sm font-semibold text-slate-100">
              《HenWei 公众号管理系统 V1.0》软件著作权
            </h3>
            <span className="text-xs text-slate-400">2019.12 - 2020.04</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                功能文档撰写：
              </span>{" "}
              负责撰写系统功能设计与功能说明文档，确保相关方对系统需求的充分理解。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                UI 设计与组件开发：
              </span>{" "}
              参与用户界面设计，深入使用 Element 组件库，积累 Vue 框架前端开发经验。
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <h3 className="text-sm font-semibold text-slate-100">
              西安赛迪思教育研究院线上系统
            </h3>
            <span className="text-xs text-slate-400">2019.04 - 2020.01</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                需求讨论：
              </span>{" "}
              参与与甲方的需求对接，协同团队讨论功能方案与系统设计。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                技术系统设计与开发：
              </span>{" "}
              基于 Vue 框架开发前端组件与页面模块，参与 AWS 云数据库架构设计与存储方案优化，
              提供端到端技术支持。
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <h3 className="text-sm font-semibold text-slate-100">
              发明专利《一种嵌入随机森林结构约束的应急救援队伍调度方法》
            </h3>
            <span className="text-xs text-slate-400">2025.09 - 2025.10</span>
          </div>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            发明专利（已公开） · 学生第一发明人
          </p>
        </Card>
      </div>
    </section>
  );
}

function Internships() {
  return (
    <section
      id="internships"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="实习经历"
        subtitle="在金融科技、行业协会与教育培训公司中积累产品与项目管理经验。"
      />
      <div className="space-y-6 text-sm text-slate-300">
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                百融云创科技股份有限公司
              </h3>
              <p className="text-xs text-slate-300 mt-1">产品经理</p>
            </div>
            <span className="text-xs text-slate-400">2025.06 - 2025.10</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                数据产品管理：
              </span>{" "}
              负责产品文档撰写、产品上线、测试、发布与验收全流程跟踪，建立并维护相关知识库。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                中台系统建设：
              </span>{" "}
              撰写产品需求文档，主导改进产品管理系统，新增“产品血缘关系图谱”功能，
              协调需求方、研发与测试推进上线与反馈闭环。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                AI 工具赋能：
              </span>{" "}
              搭建产品信息检索 Agent，设计工作流并测试 Agent 准确性，提升信息获取效率。
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                中国物流与采购联合会
              </h3>
              <p className="text-xs text-slate-300 mt-1">项目管理</p>
            </div>
            <span className="text-xs text-slate-400">2024.12 - 2025.03</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                项目管理协作：
              </span>{" "}
              起草项目合作协议，制作项目汇报材料，协助筹办采购供应链主题沙龙活动，
              参与活动策划与现场执行。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                行业研究支持：
              </span>{" "}
              参与“公共采购师知识体系”丛书编写筹备工作，完成专题资料收集整理并协助组织专家研讨会议。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                全媒体运营：
              </span>{" "}
              负责新闻的公众号编辑与官网发布，参与“采购与供应链大讲堂”系列直播运营。
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                东方瑞通（西安）信息技术有限公司
              </h3>
              <p className="text-xs text-slate-300 mt-1">项目管理</p>
            </div>
            <span className="text-xs text-slate-400">2020.09 - 2020.12</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-medium text-slate-100">
                项目流程学习与实践：
              </span>{" "}
              参与需求分析到交付的项目管理流程，协助制定项目计划，保证各环节衔接。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                需求文档撰写：
              </span>{" "}
              参与项目讨论，撰写需求与功能说明文档，提升跨团队沟通与文档表达能力。
            </li>
            <li>
              <span className="font-medium text-slate-100">
                前端开发实践：
              </span>{" "}
              负责前端页面设计与实现，基于 Vue 开发组件并进行调试优化，提升用户体验。
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="技能与证书"
        subtitle="产品、技术与协作工具并重，兼具 AI 工具深度使用经验。"
      />
      <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            产品能力
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>产品需求文档（PRD）</Tag>
            <Tag>产品文档撰写</Tag>
            <Tag>需求分析</Tag>
            <Tag>功能设计</Tag>
            <Tag>原型设计</Tag>
            <Tag>用户界面优化</Tag>
            <Tag>产品全流程跟踪</Tag>
            <Tag>产品上线验收</Tag>
          </div>
        </Card>
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            技术能力
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <Tag>数据分析</Tag>
            <Tag>运筹优化求解</Tag>
            <Tag>Vue 框架</Tag>
            <Tag>Element 组件</Tag>
            <Tag>前端开发</Tag>
            <Tag>API 设计</Tag>
            <Tag>AWS 云数据库</Tag>
          </div>
        </Card>
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            设计 / 协作工具
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>墨刀</Tag>
            <Tag>Figma</Tag>
            <Tag>Jira</Tag>
            <Tag>Office 三件套</Tag>
            <Tag>飞书</Tag>
            <Tag>钉钉</Tag>
          </div>
        </Card>
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            语言与证书
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>CET-6</Tag>
            <Tag>普通话二级甲等</Tag>
          </div>
        </Card>
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            奖项荣誉
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>一等奖学金（2023）</Tag>
            <Tag>三等奖学金（2024）</Tag>
            <Tag>三等奖学金（2025）</Tag>
            <Tag>蓝桥杯陕西赛区 Java 大学 A 组三等奖</Tag>
          </div>
        </Card>
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">
            AI 工具深度使用
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:justify-start">
            <Tag>ChatGPT</Tag>
            <Tag>Deepseek</Tag>
            <Tag>Kimi</Tag>
            <Tag>Notion AI</Tag>
            <Tag>Cursor</Tag>
            <Tag>Trae</Tag>
            <Tag>豆包</Tag>
          </div>
        </Card>
      </div>
    </section>
  );
}

function AiChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "ai"; text: string }[]
  >([
    {
      from: "ai",
      text:
        "你好，我是 Rena 的小助手。可以问我：研究方向、项目经历，或者“你为什么做 AI 产品经理”。"
    }
  ]);

  function getReply(question: string): string {
    const raw = question.trim();
    const q = raw.toLowerCase();

    if (raw.includes("研究方向") || raw.includes("研究") && raw.includes("方向")) {
      return "我的研究方向主要是“人工智能 + 运筹优化”，包括机器学习预测、随机森林模型以及混合整数规划求解，重点关注应急救援调度与智能决策系统。";
    }
    if (
      raw.includes("项目有哪些") ||
      raw.includes("做过什么项目") ||
      raw.includes("项目经历") ||
      raw.includes("项目") ||
      q.includes("project")
    ) {
      return "我参与过阳泉综合交通指挥中心项目、HenWei 公众号管理系统、西安赛迪斯教育研究院线上系统等，负责需求分析、原型设计、API 设计以及前端开发等工作。";
    }
    if (
      raw.includes("为什么") &&
      (raw.includes("AI产品经理") ||
        raw.includes("AI 产品经理") ||
        q.includes("ai pm"))
    ) {
      return "我希望把自己在软件工程、物流工程和 AI/运筹优化研究中的积累，用产品的方式真正落地到业务场景里，让复杂模型转化为清晰易用的产品能力。";
    }
    if (raw.includes("优势") || raw.includes("亮点") || raw.includes("反差感")) {
      return "我的优势在于“反差感”：既有工程与算法背景，又有产品与沟通能力，能在技术团队和业务团队之间做好翻译与连接。";
    }
    return "这是一个很好的问题。如果你想了解我的研究方向、项目经历或为什么选择做 AI 产品经理，可以直接问这些关键词，我会给你更详细的介绍。";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage = { from: "user" as const, text: trimmed };
    const aiMessage = { from: "ai" as const, text: getReply(trimmed) };
    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  }

  return (
    <section
      id="chat"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="和我聊聊 AI"
        subtitle="可以问我研究方向、项目经历以及为什么选择做 AI 产品经理。"
      />
      <Card>
        <div className="flex flex-col gap-4">
          <div className="max-h-64 space-y-2 overflow-y-auto pr-1 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs sm:text-sm ${
                    m.from === "user"
                      ? "bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-950"
                      : "bg-slate-900/80 text-slate-100 border border-slate-700/70"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="例如：你的研究方向是什么？"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-indigo-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-4 py-2 text-xs font-medium text-slate-950 shadow-soft transition-transform duration-150 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              发送
            </button>
          </form>
        </div>
      </Card>
    </section>
  );
}
function Activities() {
  return (
    <section
      id="activities"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-14"
    >
      <SectionTitle
        title="活动经历"
        subtitle="在学生组织与科技活动中锻炼项目组织与协作能力。"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-lg">
              👥
            </span>
            <h3 className="text-sm font-semibold text-slate-100">
              “科协”项目培训部部长
            </h3>
          </div>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            组织“挑战杯”“互联网+”等赛事，负责活动策划、报名组织与赛程推进，
            在多部门协同中积累项目管理经验。
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-lg">
              🤖
            </span>
            <h3 className="text-sm font-semibold text-slate-100">
              机器人竞赛志愿服务
            </h3>
          </div>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            对机器人技术保持浓厚兴趣，参与赛事志愿服务，
            在实际活动中锻炼快速反应、问题解决和现场协调能力。
          </p>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-800/60 pt-12 md:pt-16"
    >
      <SectionTitle
        title="联系方式"
        subtitle="26 届校招 · （AI）产品经理 / 项目管理方向"
      />
      <Card>
        <div className="space-y-3 text-center text-sm text-slate-300">
          <p>
            📧{" "}
            <span className="font-mono text-slate-100">
              wangna_rena@163.com
            </span>
          </p>
          <p>
            📱 <span className="font-mono text-slate-100">186-2944-3118</span>
          </p>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-800/60 pt-6 text-xs text-slate-500">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-slate-400">
          📌 很荣幸通过筛选参与本次挑战，期待能加入贵司，与团队共同成长！
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-slate-500">
          <span>📧 wangna_rena@163.com</span>
          <span className="text-slate-600">·</span>
          <span>📱 186-2944-3118</span>
        </div>
        <p className="text-slate-600">
          © {new Date().getFullYear()} Rena Wang · 本网页由AI辅助完成 · 仅用作 Inspire（原Thoughtworks中国）校招面试挑战
        </p>
      </div>
    </footer>
  );
}

function Reveal({
  children,
  delay = 0
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2 text-center">
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-xs text-slate-400 sm:text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-900/90">
      <div className="pointer-events-none absolute inset-x-10 -top-24 h-32 rounded-full bg-gradient-to-b from-indigo-500/15 to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  icon,
  tags
}: {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}) {
  return (
    <Card>
      <div className="flex h-full flex-col items-center text-center">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900/80 text-sm">
            {icon}
          </span>
          <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        </div>
        <p className="mb-4 text-sm text-slate-300">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 text-[11px] text-slate-300">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-sm transition-colors duration-200 hover:border-indigo-400/80 hover:bg-slate-900">
      {children}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-20 shrink-0 text-xs font-medium text-slate-400 sm:w-24 sm:text-[13px]">
        {label}
      </dt>
      <dd className="flex-1 text-xs text-slate-200 sm:text-[13px]">{value}</dd>
    </div>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="text-sm text-slate-100">{value}</p>
    </div>
  );
}

function SkillItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-sm">
        {icon}
      </span>
      <span className="text-xs text-slate-200">{label}</span>
    </div>
  );
}
