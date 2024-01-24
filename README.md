# （尝试成为）计算机科学学习地图

当前版本：v0.9内部版本

## 关于本文

本文**并非**试图给迷茫的初学者提供一个一站式的“宝宝巴适”学习计划（这样的学习计划有很多），而是想尽可能地给读者以丰富选择——全景式地展示计算机科学中的方方面面，（尝试）给出各个学科的学习资料、自学路径。
  - 所以，虽然本文内容丰富看起来“很吓人”，但**只需要读者自主选取一小部分、打造专属自己的学习计划**，就可以完成自己的学业。
  - 计算机科学与其他学科的交叉领域，如计算化学、信息生物学暂时不包括在内。

如果仍需要一个最快、最短、最功利主义的学习路径，那么以下是你需要完成的`主线任务`：
  1. 学：Python —— 通过 MIT 6.0001 和《Python编程导论》。
  2. 学：程序设计 —— 通过 Berkeley CS61A 和《计算机程序的构造与解释》。
  3. 学：数据结构与算法 —— 通过 Berkeley CS61B 和《算法》。
  4. 学：计算机系统 —— 通过 Berkeley CS61C 和《深入理解计算机系统》。
  5. 学：操作系统 —— 通过 Berkeley CS162 和《操作系统导论》。 
  6. 学：计算机网络 —— 通过 Stanford CS144 和《计算机网络：自顶向下方法》。
  7. 学：机器学习 —— 通过 吴恩达机器学习 和 《机器学习（西瓜书）》。
  8. 学：分布式系统 —— 通过 MIT 6.824 和《数据密集型应用系统设计》。
  9. 适当补充面向计算机科学的数学。

不妨在学习这些内容时再来回看本文，逐步开拓视野，探索`支线任务`。

> 本文中所列出的书籍，虽然有免费盗版书网站提供电子版，如 Z-Library、Library Genesis、Anna’s Archive 等网站，但请注意下载行为可能在您的国家被定义为违反法律，有能力请从正规途径获取。再次声明，虽然有上面那些`免`**费**`网`**站**提供了`免`**费**`电`**子**`书`，但请尊重知识产权、保护作者权益！

> 加★的资源为重点推荐资源，其共同点为“适合自学的必读课程”。

## 是什么“阻碍”你学会

很多人都被计算机科学吓倒了，甚至 50% 以上的名校计算机专业毕业生都达不到入门，这是因为：
1. *对于计算机的常识过少*。这与中学教育大不相同，学习起来像被浸入了“彷徨无所依”的黑暗空间。
2. *自我设限*。刚开始学的时候就直接认定计算机“很难”“需要很高的智商”“我不适合”。（这可能是由第二条导致的）
3. *没有全身心投入*。正如第二条所说，计算机科学需要一点一点搭建自己的知识体系，通过时间的催化完善对各个领域的认识。很多学科在下课、写完作业之后就不再需要耗费精力了，但计算机科学不是这样。
4. *完美主义陷阱*。通俗来说，就是一旦学得“卡壳”就抓耳挠腮全身不适。暂时不懂是没关系的，“60 分万岁”。计算机科学中，可能存在 A 学科包含了 B 学科的预备知识，B 学科又包含 A 学科的预备知识这种情况。
5. *投机取巧、喜欢糊弄*。由于计算机科学对于大部分人来说是一个“重视基础的全新学科”，妄图通过单一刷课、单一刷题、和领域权威交谈“镀金”、听科普讲座而学会是不明智的。
6. *刻板偏见*。许多人都会被灌输一些毫无依据的观点，觉得计算机科学很难（只有技术狂人、绝顶聪明才能学会），对很多概念的理解偏颇，以至于采用了错误的学习方法和路径或者根本放弃接纳计算机科学。

> `天才也非不学就会`——学习任何知识，无论是计算机，还是数学、物理等理论性抽象性很强的学科，都像柯南探案一样，只有在了解了 A、B、C、D 所有的线索之后，才能自然而然地理解整个事件的原貌，缺一不可。反之，如果你感觉学不会，那就是还欠缺了许多的前备知识，“胜利的拼图还没集齐”。(数学第一定律)无论是牛顿、高斯、伽罗瓦、爱因斯坦，他们都不是从 0 开始创造了所有的理论，原创的只是少数——他们通过学习获得的知识体系的量大大超过了他们原创的数学方法。正确地选取学习顺序、不因一时地挫败而情绪化地自暴自弃非常重要。

## 开始计算机科学之旅

入门计算机科学的传统方法，通常是学习一门类似于“信息技术基础”的课程，但这门课十分鸡肋，既不能直观地展示出计算机专业的特点，而因其深度太浅，单纯地铺开学习广度无法深入人心，就像在给学生远远地观看甲骨文上的卜辞。

如果你熟悉计算机的基础操作，一个稍显硬核的方法是，**直接去学习一门编程语言，学会与计算机对话**。便捷的编程工具让这成为了现实。

> `不要害怕自学`——就像“不自量力”的真正解释是，“不自学学不好量子力学”，计算机科学的最佳学习方法也是自学。甚至可以说，没有相当程度的自学能力，是不可能学会计算机科学的！计算机科学本身就是一个涉及非常广泛的综合学科，而面向不同的工作领域，又会遇到不同的技术的组合（技术栈）。学习时一蹴而就、工作中仅仅依靠“吃老本”断不可行。

> `一定要做编程作业`——计算机科学课程的最大特点是：**做课后作业的编程项目比听课、读教材重要得多**，这是最能透彻学会一门技术的方法，也是效率最高的方法。一般而言，在公开课的主页都可以找到配套的课后作业，这些作业质量极高，并且可能配有答案。在 Github 上也可以搜到

### 学习一门编程语言

于是紧接而来的问题是，如何选取自己的第一门语言？其实这个问题无关紧要‵

我遇到过很多偏执迂腐的人，他们在对计算机科学一无所知的情况下，不断重复着“刻板偏见”，无视那些真正有益的建议。
   - 极致实用主义者会说，“编程语言只是工具”（错的），我就学 Python，别让我学乱七八糟的。
   - 老古板们会说，“越底层的语言越厉害啊”（错的），高手都用汇编和 C 语言。
   - 弄潮儿会说，“越新的语言肯定越先进”（错的），老掉牙的 Java、C 都过时了，就该学 Rust、GoLang、Swift。

另外一个令人哭笑不得的蠢事是：编程语言已经形成了各种宗教教派（多么讽刺！用愚昧无知的宗教迷信去敬拜人类科技中的瑰宝）。时下 Python 的教徒最多，他们因为人工智能应用的泛用而获得了莫大优越感，攻击其他语言赶不上潮流（人工智能绝非 Python 独享）。C 语言的信众是最古老的，他们的兴起仅仅是因为恰巧——Unix 恰巧变得流行，Unix 恰巧是用 C 语言编写而成。

人类发明了数千种编程语言，似乎永远也学不完——但事实是，其实**只有四种编程语言的“思想”**（严格来说，是范式 Paradigm），也就是人类操控计算机有四种思想；**同类编程语言之间的差异极小**，比东北话和北京话、利物浦口音和伦敦腔差距更小（前提是，你透彻地理解了编程语言的本质）。这四类是：`命令式编程`、`面向对象编程`、`函数式编程`、`逻辑式编程`。

**这四种编程范式，才是最核心的组织计算机程序的方法，才是每一个程序开发人员需要深刻理解的思想**（而不是泡在层出不穷的新语言的汪洋大海中）；编程语言固然重要，但是也只是这四种思维的表达形式、是外表而非筋骨（这也是为什么中文编程毫无意义，编程的真正语言是高度抽象的数学语言，而而非英文或者中文）。现代编程语言总是想给你很大的自由（大部分语言是多范式的），所以**只要去学就好了，你永远可以十分轻松地从一门编程语言切换到另外一门。**

与其挑剔编程语言，不如选取更容易理解的公开课和教程。以下是非常适合入门的编程语言学习资源。

### Python

Python 是当前最炙手可热的编程语言，其设计注重简洁、可读性和易用性，使其成为初学者入门的理想语言。Python的最大优势为:
  1. 广泛的标准库（参看《Python标准库》）、跨平台支持（Windows、MacOS、Linux等）、方便于其他编程语言进行无缝集成。
  2. 丰富的第三方库和框架，如NumPy、Pandas、Scikit-learn、TensorFlow等，这些库提供了广泛的功能和工具，方便进行数据处理、机器学习、深度学习等任务。
  3. 拥有一个庞大而活跃的开源社区，这意味着可以轻松地获得帮助、解决问题，并找到代码示例和资源。

**★【课程】MIT 6.0001 计算机科学和Python编程导论** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/av27987738) [#课程主页](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)
  - 麻省理工学院（MIT）的计算机科学入门课程，强调培养计算思维，旨在教授学生如何使用计算机科学的基本概念和技术解决问题。理论与实践结合，鼓励自学。
  - 配套教材为《Python 编程导论》。

**【书籍】Python 编程导论 Introduction to Computation and Programming Using Python** [#豆瓣](https://book.douban.com/subject/30155590/) [#啊玛粽](https://www.amazon.com/Introduction-Computation-Programming-Using-Python/dp/0262529629)
  - MIT6.001 的配套教材，由 MIT 教授结合课堂实践亲自编写。涉及了很多个主题，包括一些经典算法、统计学、蒙特卡罗模拟、机器学习，但都浅尝辄止。中文翻译质量稍差，有能力直接学英文。

**【资源】Python Share**[#主页](https://github.com/Yixiaohan/codeparkshare)
  - Python初学者书籍、视频、资料、社区推荐。

**【资源】Python 资料汇总**[#主页](https://github.com/iamjoel/python-learn#%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%

### Scheme

Scheme 是 Lisp 语言的方言之一，具有语法非常简洁，拥有少量的基本语法规则和表达式结构的特点。Scheme 作为一种纯粹的函数式编程语言，将函数作为第一类对象，即“一切皆函数”，以 Lambda 演算为基本的计算模型。学习 Scheme 语言可以更直接地用计算思维组织程序，也可以接触到动态类型系统、宏系统、高阶函数、闭包、反射、元编程等“高级”编程特性。

**★【书籍】程序设计方法 How to Design Programs（HtDP）** [#豆瓣](https://book.douban.com/subject/35222513/)
  - 十分适合零基础的初学者的入门书籍，简单易懂地从编程思维、程序组织形式去学习编程。可以作为 SICP 的前置课程学习。

### Haskell

Haskell是一种纯函数式编程语言，具有强大的类型系统和高级特性。它由米兰·昆德拉等人于1987年设计开发，旨在提供一个优雅、安全、可靠且高效的编程环境。Haskell鼓励纯函数式编程，采用静态类型系统、惰性求值策略，支持高阶函数和函数组合，具有强大的并发和并行编程能力。

**【课程】Functional Programming 101x** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1wb411w7WS)
  - 配套教材为：Programming with Haskell [#豆瓣](https://book.douban.com/subject/1951517/)
  - Haskell 入门课程，内容比较浅显。

**【书籍】Get Programming with Haskell** [#豆瓣](https://book.douban.com/subject/26992771/)
  - 一本入门 Haskell 编程语言的书籍，它避免了深奥的学术术语和繁重的函数式编程理论。

### 学编程时遇到问题？

  - **尝试理解报错信息**——即使看起来很乱，但那也是可读的，包含了最直接的错误信息。
  - **查阅官方文档**——READ THE FXXKING MANUAL!!!
  - **在网络上寻求帮助**，如 Stackoverflow、Reddit 等。
  - 尽量不要直接问别人，**锻炼独立解决问题的能力**——最了解你的代码逻辑的人永远是你自己。

### 认识计算机科学

仅仅学完编程语言，只会得到一门奇奇怪怪的“手艺”（这门手艺并不比做木匠、电工更高明！）、一卷没啥用的“魔法咒语”，仍然无法找到“计算机科学是什么”的感觉。虽然“计算机科学导论”这门课无法让你获得任何实实在在的技术，但是却可以让你理解计算机科学究竟可以做什么、人类已经利用计算机到了何种地步、人类如何利用计算机解决现实问题。

一个几乎对于所有学科通用的“初窥门径”的方法是，学习它的历史。了解了一个学科的诞生初期的模样，可以清楚地看到这门学科是从哪些基础思想演化而来，而又是为了解决什么困难的问题而被创造；再结合后续的发展，可以将多端寡要的现状与远古时期的单一直接的目的连接。

相对而言，“计算机科学导论”这门课程，比“信息技术基础”要深入，讨论了更多的技术细节，因而对于学习的要求也更高。但是**不建议在这门课上花费太多时间**，浅尝辄止、不求甚解即可；有一个基础的印象之后，在学习后边的专项课程自然会接二连三地“恍然大明白”。

**【课程】Havard CS50: 非计算机专业如何理解计算机技术 Understanding Technology** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1ZK4y1q7Vc) [#课程主页](https://cs50.harvard.edu/technology)
  - 这门课程适合那些尚未将自己视为计算机专业人士的学生。针对每天使用技术工作但不一定了解其底层工作原理或在出现问题时如何解决的学生，该课程填补了这些空白，使学生能够更有效地使用和解决技术问题。通过关于硬件、互联网、多媒体、安全、编程和网站开发的讲座，以及对当前事件的阅读，该课程为学生提供了应对当今技术并为未来做准备的能力。

【课程】 **计算机科学速成课 Crash Course Computer Science** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1EW411u7th) [#油管](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulI)
  - 简单地介绍了计算机科学的发展历史和一些关键概念。使用了较多的专有名词，探讨了很多核心的概念，对于初学者来说有一定的理解难度。

**【书籍】计算机科学导论 Foundations of Computer Science** [#豆瓣](https://book.douban.com/subject/35084853/) [#啊玛粽](https://www.amazon.com/Foundations-Computer-Science-Behrouz-Forouzan/dp/1473751047/ref=sr_1_3?dib=eyJ2IjoiMSJ9.3B0heCaDCPYb5rFihSgPs9ciwfIfEhd6fT6XMr08BHDb1OCU-QnXExNBeHOhsfzEGgMkzS-Snqi88PzybV_R-axz_bH9wxSOPl_sorUXPNcIOKzLq7I6nPHYkG6q1Fg1TLpjibzWnD7lf7Gmtn5h_mVEPx3Iz0xNItrJXCz6BclsksOkPH7LUeEeQYn8sjxdAw8gQgHOlgS2HbdRrBZ39gjtfRv2mZg2HA2AIiL8gvM.S1IASXcJDv5gVUiC6L9k2G07XxVMYBOoQlqPko0HrYs&dib_tag=se&keywords=Foundations+of+Computer+Science&qid=1705368136&s=books&sr=1-3)
  - 一本百科全书式的计算机专业基础入门读物，书中涉及计算机科学的方方面面。虽然读者对象是计算机专业的学生，但这本书深入浅出，引人入胜，勾画出计算机科学体系的框架。

看一些很好的科普视频和文章，对于培养兴趣、了解计算机的历史、找到学计算机的感觉非常有帮助。在各大视频网站上有大量科普视频，在闲暇时搜索观看即可。

**计算机科学地图** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1WH4y1B7Af/) [#油管](https://www.youtube.com/watch?v=SzJ46YA_RaA)

**两座塔的故事 Theory of Computation: A Tale of Two Towers** [#哔哩哔哩](https://www.bilibili.com/video/BV1z94y1T7LC) [#油管](https://youtu.be/ruOnPmI_40g)

**代码美学 Code Aesthetic** [#哔哩哔哩](https://space.bilibili.com/1629390/channel/collectiondetail?sid=1068921)

## 核心基础

如果去问一个学者、教授、工程师，他们的职业生涯最后悔的地方是什么，他们往往会说，“在学生阶段没有打好基础。如果可以重来，我一定要把哪些基本的课程一点点学明白”。基础对于任何学科都尤为重要，在计算机科学更是如此。

计算机科学的基础最核心的部分包括离散数学与概率论、算法、计算机网络、操作系统、数据库和计算机组成与结构，是系统性地学习计算机科学必不可少的重点内容。这部分内容学起来比较枯燥乏味，有一定的抽象性，和日常生活的距离非常远，很容易使人因身在庐山中而不识真面目。

这个阶段往往是学习计算机最艰难、最困惑的时刻。以下是一些学习建议：
  - 一定不要停留在理论，去写大量的**玩具程序**吧！学习一项技术的最好方法就是用编程语言重新实现它。Build-Your-Own-X 是 Github 上一个颇受好评的项目 [#Github](https://github.com/codecrafters-io/build-your-own-x) ，包含了许多技术的 step-by-step 教学。除此之外，Github 上还有许多适合用来理解理论的教学项目。
  - 各个公开课都提供了丰富的**课后编程实践项目**，一定要重视这样的动手机会，自己实现永远是最好的学习方法。
  - 多去了解科技新闻、计算机技术的科普，将其与学习内容联系起来。
  - 从零构建一个个人的计算机科学蓝图，每有所得就去丰富它，了解自己处于什么位置。
  - “混圈子”，**参与计算机科学社区**，与其他学生、教授和行业专业人士建立联系。这有助于获取导师建议、分享经验，并了解行业的最新趋势。

> `使用英语`——至今为止，英语仍然是计算机科学的主流学术语言，英语互联网中的学习资源无论是质量还是数量都百倍于中文互联网——这不是崇洋媚外，在客观定论之前，一切民族主义冲动和独断论都显得缺乏智慧。最新的技术著作、最新的学术论文、最好的网络课程资源，几乎都由英语写作而成。并且，即使那些著作被翻译成了中文，其理解难度也高于直接看英文原版。这有两部分原因：a.许多技术的英文专有名词更接近直觉和生活，理解成本低，而中文则被翻译成了专有名词，需要专门解释、专门理解；b.中文翻译的质量参差不齐，往往存在很多句不达意、翻译错误、机翻的情况（请不要责怪译者，翻译计算机书籍纯属“为爱发电”，费力不讨好，几乎没有经济利益）。

> 克服英语阅读障碍最好的方式是翻译一本有价值的书。

### 操作系统 Operating System

操作系统是计算机硬件与应用软件之间的桥梁，负责管理和协调计算机系统的各个部分，以提供用户和应用程序所需的服务。有一个很好的比喻是，操作系统在启动后，“静静的趴在内存里”，等待应用程序在需要时调用。

操作系统是计算机科学中的一门基础课程，目标是理解计算机系统中操作系统的重要作用，以及如何管理和协调硬件和软件资源。一般包括：进程管理、内存管理、文件系统、输入/输出系统、系统调用和系统服务、死锁、安全性和保护、分布式操作系统等话题。

**★【课程】UC Berkeley CS162: 操作系统和程序设计 Operating System and Systems Programming** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1ab4y1b7BU) [#油管](https://www.youtube.com/watch?v=pPzVV2kkGHc&list=PLMcZASLnrVs5qyBC-dc4bFRtC8ROPYmS0) [#课程主页](https://cs162.org/)

**【课程】MIT 6.S081 Operating System Engineering** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1rS4y1n7y1/) [#油管](https://www.youtube.com/watch?v=L6YqHxYHa7A)
  - [配套教材](https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf)，[Assignment](https://pdos.csail.mit.edu/6.828/2021/schedule.html)，Rush 实现的xv6 [Github](https://github.com/Ko-oK-OS/xv6-rust)
  - MIT6.S081 课程介绍了关于操作系统的设计和实现等方面的内容，以及它们作为系统编程基础的使用。课程主题包括虚拟内存；文件系统；线程；上下文切换；内核；中断；系统调用；进程间通信；软件和硬件之间的协调和交互。该课程选用RISC-V的多处理器操作系统xv6来说明这些主题。个人实验作业涉及扩展xv6操作系统，例如支持复杂的虚拟内存功能和网络。

**★【书籍】操作系统导论 Operating Systems: Three Easy Pieces** [#豆瓣](https://book.douban.com/subject/33463930/) [#在线阅读 ostep.org](http://www.ostep.org)
   - 该书围绕操作系统构建的三个基本概念进行组织：虚拟化（CPU和内存的虚拟化）、并发性（锁和条件变量）、以及持久性（磁盘、RAID和文件系统）。如果结合认真的项目工作和家庭作业，这些内容将引导学生更深入地理解和欣赏现代操作系统。

**【书籍】现代操作系统 Modern Operating Systems** [#豆瓣](https://book.douban.com/subject/27096665/) [Free PDF Copy](http://stst.elia.pub.ro/news/SO/Modern%20Operating%20System%20-%20Tanenbaum.pdf)
   - 获得了 McGuffey Longevity 奖的优秀教学书籍，适合作为操作系统课程的入门教材用，以及为专业人员提供参考。第四版增加了许多关于操作系统的最新资料。

### 计算机网络 Computer Networks

计算机网络课程涵盖计算机科学和工程领域中有关计算机网络的基本概念、协议、技术和应用的内容。这门课程的目标是使学生了解计算机网络的原理、设计和管理，以及网络通信中涉及的各种技术和协议，包括TCP/IP协议族、HTTP、DNS等。

**★【课程】Stanford CS144: Computer Network** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV137411Z7LR/) [#油管](https://www.youtube.com/watch?v=r2WZNaFyrbQ&list=PL6RdenZrxrw9inR-IJv-erlOKRHjymxMN)
  - [Homepage & Assignment](https://cs144.github.io/)
  - CS144是一门涵盖计算机网络基础概念和技术的课程。学生将学习有关计算机网络设计、实现和管理的关键原理。课程内容涵盖网络协议、分组交换、路由算法、传输层协议（如TCP和UDP）、网络安全等方面。课后作业为编码搭建出整个 TCP/IP 协议栈，实现 IP 路由以及 ARP 协议等。

**★【书籍】计算机网络：自顶向下方法 Computer Networking: A Top-Down Approach** [#豆瓣](https://book.douban.com/subject/36081529/)
  - 本书采用作者独创的自顶向下方法讲授计算机网络的原理及其协议，即从应用层协议开始沿协议栈向下逐层讲解，让读者从实现、应用的角度明白各层的意义，进而理解计算机网络的工作原理和机制。本书强调应用层范例和应用编程接口，使读者尽快进入每天使用的应用程序环境之中进行学习和“创造”。

### 计算机组成与结构 Computer Organization and Architecture

本科目主要关注计算机系统的硬件层面，包括计算机的组成、结构、运行原理以及底层硬件的设计和实现。

**★【课程】CS61C: Great Ideas in Computer Architecture** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1fC4y147iZ) [#油管](https://www.youtube.com/playlist?list=PLDoI-XvXO0aqgoMQvogzmf7CKiSMSUS3M) [#课程主页](https://cs61c.org/su20/)
  - 配套教材为：Computer Organization and Design：The Hardware/Software Interface RISC-V EDITION [Free PDF Copy](http://home.ustc.edu.cn/~louwenqi/reference_books_tools/Computer%20Organization%20and%20Design%20RISC-V%20edition.pdf)

**【课程】Princeton: Computer Architecture** [#Coursera](https://www.coursera.org/learn/comparch)

### 数据结构与算法 Data Structure and Algorithms

在计算机科学的教育和实际应用中，数据结构与算法的学习是重要的基础。它们为程序员提供了解决实际问题的工具和方法，是编写高效、可维护和可扩展软件的关键要素。数据结构与算法是计算机科学中两个基础而重要的概念。
  - 数据结构：
    - 定义：数据结构是一种组织和存储数据的方式，目的是使数据能够高效地被访问和修改。它涉及到数据的组织方式和相互之间的关系。
    - 目的：使用合适的数据结构可以提高数据的操作和存储效率，使得程序更为清晰、简洁，同时降低算法的复杂度。
    - 例子：数组、链表、栈、队列、树、图等都是常见的数据结构。
  - 算法：
    - 定义：算法是解决特定问题或执行特定任务的一系列步骤。它描述了如何通过一系列的输入来产生期望的输出。
    - 目的：算法是解决问题的方法，其设计和分析的目标是确保算法在各种情况下都能够高效地运行。
    - 例子：排序算法、搜索算法、动态规划、贪心算法等。

数据结构和算法之间有密切的关系，因为合适的数据结构选择会直接影响算法的效率。一个好的算法能够在给定的问题上以较低的时间和空间复杂度运行，而合适的数据结构可以使算法更为简单和高效。

**★【课程】UC Berkeley CS61B: Data Structures and Algorithms** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1q3411V7rS/) [#课程主页]
  - Java 描述入门课，课程十分适合自学。

**【课程】Princeton Coursera ver: Algorithms** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1jx411U768) [Coursera Part1](https://www.coursera.org/learn/algorithms-part1) [Coursera Part2](https://www.coursera.org/learn/algorithms-part2)
  - 配套教材为《算法》 [[#在线阅读]](https://algs4.cs.princeton.edu/home/)。
  - 入门课，Java 描述，讲解细致透彻。

**【课程】MIT 6.006: Introduction to Algorithms** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1fu41127MN)
  - 配套教材为《算法导论》。
  - 入门课，较为艰深，理解难度大，但如果能坚持学完会有很大的收获。

**【课程】UC San Diego: Data Structures and Algorithms Specialization** [#Coursera](https://www.coursera.org/specializations/data-structures-algorithms?)

**★【书籍】算法 Algorithms** [[#在线阅读]](https://algs4.cs.princeton.edu/home/)
  - 算法领域经典的参考书，全面介绍了关于算法和数据结构的必备知识，并特别针对排序、搜索、图处理和字符串处理进行了论述。对自学非常友好，提供了良好的代码、图示。

**★【书籍】算法设计手册 The Algorithm Design Manual** [#豆瓣](https://book.douban.com/subject/4048566/)
  - 设计实用且高效算法的最全面指导书。本书揭密了算法的设计与分析，以简单易懂的写作风格，介绍了各种算法技术，着重强调了算法分析，全书包括两大部分，“技术”部分介绍了设计和分析计算机算法的各种方法，“资源”部分给出了大量的参考资源，以及算法实现的各种资源。

**【书籍】(CLRS)算法导论 Introduction to Algorithms** [#豆瓣](https://book.douban.com/subject/20432061/)
  - 注重严谨和全面性的、有一定难度的经典教材，许多读者评价为不适合自学，但也颇有一定数量的人确实通过此书自学了算法。至少本书可以作为工具书使用。

**【书籍】(TAOCP)计算机程序设计艺术 The Art of Computer Programming**
 [#豆瓣](https://book.douban.com/subject/1130500/)
  - 计算机科学领域最有名的著作，许多名人都对此书不吝赞美之词。美国计算机科学家高德纳（Donald Ervin Knuth）编著的关于计算机程序设计之七卷本著作。1999年底被《美国科学家》（American Scientist）期刊列为20世纪最佳12部学术专著之一，与狄拉克的“量子力学”、爱因斯坦的“相对论”等并列；作者因此获得 1974 年图灵奖。
  - 本书共七册，分别讲解基础算法、半数值算法、排序与搜索、组合算法、造句算法、与上下文无关语言理论、编译器技术。其中前三册已经出版，第四册部分出版。
  - 本书卷帙浩繁，并非系统性自学的首选，而是作为百科全书式的算法分析工具书而存在；其最有价值的部分则是本书的大量的高质量习题。

**【资源】** [#主页](https://the-algorithms.com/) [#Python实现](https://github.com/TheAlgorithms/Python)
  - 印度资深工程师发起的算法实现教学项目，使用

### 数据库系统 Database Systems

数据库是一个结构化的数据集合，用于存储、管理和组织数据。它是一个电子化的文件柜，可以容纳大量有关特定主题的数据，方便在需要时读取已有的数据、添加新的数据，或者进行一些数据的管理。

**★【课程】UC Berkeley CS186: Introduction to Database System** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1zu411y7kx) [#课程主页](https://cs186berkeley.net/)

**【课程】CMU 15-445: Introduction to Database System** [#油管](https://www.youtube.com/playlist?list=PLSE8ODhjZXjaKScG3l0nuOiDTTqpfnWFf) [#课程主页](https://15445.courses.cs.cmu.edu/spring2023/schedule.html)

**★【书籍】Readings in Database Systems（Redbook）** [#豆瓣](https://book.douban.com/subject/2256069/)
  - 这本畅销的数据库研究教材及参考书的最新版，新增了大量内容并进行了修订。涵盖了经典文献和最新热门主题。数据库研究的成果已经在学术领域得到应用，涉及的范围从生物信息学到下一代互联网架构，以及在工业应用中包括基于Web的电子商务和搜索引擎。该领域的核心思想变得日益具有影响力。本教材为学生和专业人士提供了数据库研究的基础知识，并为理解该领域最新创新提供了技术背景。所选文章涉及数据库领域最重要的问题，这是任何数据库管理系统专业人士的基本材料。

**【书籍】数据库系统基础教程 A First Course in Database Systems** [#豆瓣](https://book.douban.com/subject/3923575/)
  - 介绍流行的关系数据库和对象关系数据库内容，涉及关系数据模型、E／R模型、UML模型以及对象模型等高级数据模型。然后介绍了有关半结构化数据组织管理中比较流行的XML等内容，既包括了数据组织模型的内容，也给出了相关编程语言，如XPath、XQuery、XSLT等。
  - 中文翻译较差，存在一些错误，有能力直接读中文。

**【书籍】数据库系统概念 Database System Concepts** [#豆瓣](https://book.douban.com/subject/10548379/)
  - 数据库系统方面的经典教材之一，其内容由浅入深，既包含数据库系统基本概念，又反映数据库技术新进展。

## 数学基础

计算机科学中数学的重要性众说纷纭，它们的问题在于，妄图以自己片面的认知代表整个学科。
  - 2008 年左右，网络上的主流看法是初中数学就足够。这是因为那个时候，大部分的 IT 从业者都是从事网站开发、低端外包软件等行业。这只是计算机科学的冰山一角。
  - 2015 年开始，随着芯片计算力的成倍提升，以机器学习为首的人工智能方法在沉寂了数十年之后，与各个行业交融发展，人才需求极大。于是机器学习相关的线性代数、概率论与统计学的重要性被提出。
  - 工作内容偏向算法、硬件开发等领域的工程师会更看重离散数学或数学分析等。
  - 在计算机科学诞生之初，其理论基础几乎可以说是直接照搬数学，紧密相关的领域包括数理逻辑、自动机理论等。

所以可以看到，学计算机科学需不需要数学，这个问题本身就不是一个单一的问题——但是却可以有一个单一的解答：**你需要根据自己所深入学习的领域，来决定自己究竟需要哪方面的数学基础**。

### 离散数学 Discrete Mathematics

离散数学是数学的一个分支，它研究离散对象和离散结构，通常涉及不连续、离散的整数值或离散集合。离散数学与计算机科学的关系如下：
  - 逻辑和证明：离散数学中的逻辑和证明技术是计算机科学中算法正确性和程序验证的基础。逻辑提供了一种严格的推理框架，用于验证计算机程序的正确性。
  - 集合论和数据结构：集合论是离散数学中的一个基础概念，而数据结构是计算机科学中用于组织和存储数据的重要工具。集合论的概念和操作直接影响了数据结构的设计和实现。
  - 图论和网络设计：图论提供了一种描述和分析网络结构的数学方法。在计算机科学中，图论常用于网络设计、路由算法、社交网络分析等领域。
  - 组合数学和算法设计：组合数学的排列、组合和图论等概念在算法设计中有广泛应用。算法设计通常涉及对离散对象的操作和组织。
  - 数论和加密：离散数学中的数论概念，如模运算和同余关系，在密码学中有重要应用。加密算法通常基于数论的离散数学概念。
  - 概率论和算法分析：离散概率论用于分析算法的平均和最坏情况性能。在计算机科学中，概率论常用于分析算法的效率和复杂性。

**★【课程】MIT 6.042J: Mathematics For Computer Science** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1Kb411n7oa) [#油管](https://www.youtube.com/playlist?list=PLB7540DEDD482705B
) [#课程主页](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/)
  - 该课程提供了面向计算机科学和工程的离散数学交互式介绍。该课程的主题大致分为三个部分：
    - 数学的基本概念：定义、证明、集合、函数、关系。
    - 离散结构：图、状态机、模算术、计数。
    - 离散概率论。
   - 完成6.042J后，学生将能够解释并应用计算机科学中离散（非连续）数学的基本方法。他们将能够在算法设计和分析、可计算理论、软件工程和计算机系统的后续课程中使用这些方法。

**【课程】UC Berkeley CS70 Discrete Mathematics and Probability Theory** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1gf4y1q7UY) [#油管](https://www.youtube.com/playlist?list=PLzAv_uHZw7dTI2e0F8-lxxOWV9zXMzwNE) [#课程主页](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/)
 [Assignment](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/assignments/)

**★【书籍】Mathematics for Computer Science** [#豆瓣](https://book.douban.com/subject/33396340/)
  - 本书是麻省理工学院计算机科学与工程专业本科生的初等离散数学课程讲义，涵盖了国外计算机科学专业涉及的基础数学知识，内容涉及形式逻辑符号、数学证明、归纳、集合与关系、图论基础、排列与组合、计数原理、离散概率、递归等，特别强调数学定义、证明及其应用方法。

**【书籍】(DMIA)离散数学及其应用 Discrete Mathematics and Its Applications** [#豆瓣](https://book.douban.com/subject/34866266/)
  - 本书是经典的离散数学教材，被全球数百所大学广为采用。书中全面而系统地介绍了离散数学的理论和方法，主要包括：逻辑和证明，集合、函数、序列、求和与矩阵，算法，数论和密码学，归纳与递归，计数，离散概率，关系，图，树，布尔代数，计算模型。全书取材广泛，除包括定义、定理的严格陈述外，还配备大量的例题、图表、应用实例和练习。第8版做了与时俱进的更新，成为更加实用的教学工具。

**【书籍】Mathematics, A Discrete Introduction** [#豆瓣](https://book.douban.com/subject/12047615/)
  - 这本书是数学入门的一部分，特别是离散数学的入门。这本书有两个主要目标：学会阅读和撰写证明，以及离散数学的基本概念。这本数学教材以清晰的呈现方式教授你不仅如何撰写证明，还如何清晰地思考和在这门课程之外逻辑地提出案例。尽管它是从数学家的角度呈现的，你将了解到在计算机科学、工程、概率、统计、运筹学以及其他应用数学领域中离散数学的重要性。提示和证明模板等工具将帮助你在这门课程中取得成功。

### 概率论与统计学 Probability Theory and Statistics

概率论研究随机事件发生的可能性，包括样本空间、事件、概率分布、条件概率等基本概念。它提供了一种描述随机现象的框架。统计学涉及收集、分析、解释和呈现数据的方法。它使用概率论的概念来进行推断和决策。概率论与统计学在计算机科学的以下领域发挥作用：
  - 算法分析：概率论用于分析算法的平均和最坏情况性能。通过使用概率模型，可以更好地理解算法在不同输入情况下的表现，并进行更有效的算法设计。
  - 机器学习：统计学和概率论在机器学习领域有广泛应用。机器学习算法的许多模型和推断方法基于统计学概念，而概率论提供了处理不确定性的框架。
  - 数据挖掘：统计学方法常用于分析和挖掘大规模数据集。在数据挖掘中，统计学可以帮助识别模式、关联规则和异常。
  - 人工智能：概率图模型、贝叶斯网络等概率论工具在人工智能中扮演关键角色。它们用于建模不确定性、推断和决策过程。
  - 网络和分布式系统：图论和概率论在网络和分布式系统的设计中起到关键作用。图论用于分析网络拓扑结构，而概率论可以用于分析分布式系统中的随机事件。
  - 密码学：概率论和组合数学在密码学中发挥着关键作用，尤其是在设计和分析加密算法、随机数生成和安全协议方面。
  - 贝叶斯推断：贝叶斯推断是统计学的一个方法，它在计算机科学中用于处理不确定性、学习模型参数和进行预测。
  - 模型验证：统计学方法常用于验证计算机模型的有效性。通过使用统计检验，可以对模型的输出进行假设检验和验证。

**【书籍】Probability, Theory and Examples** [#豆瓣](https://book.douban.com/subject/5326315/)
  - 这本面向初入研究生阶段的概率论经典教材涵盖大数定律、中心极限定理、随机游走、鞅、马尔可夫链、遍历定理和布朗运动。它是一部全面的教材，专注于对应用最有用的结果。其理念是学习概率的最佳方式是亲自动手，因此书中包含了200个例子和450个问题。新版以一个简短的测度论章节开始，以帮助初次接触该主题的读者入门。系统性强，其习题都包含了作者给出的解答。

**【书籍】Probability and Statistics for Computer Science** [#豆瓣](https://book.douban.com/subject/31728806/)
  - 本书为计算机科学家全面而深入地讲解概率和统计学，特别强调模拟和离散决策理论。它使用计算机科学中非常基础的主题来举例说明理论，以便任何数学方面倾向的读者都能充分理解。

### 线性代数 Linear Algebra

线性代数是数学的一个分支，研究向量空间和线性映射的代数结构。线性代数的概念和技术在计算机科学中被广泛应用。
  - 图形和图像处理：计算机图形学和图像处理是线性代数应用最广泛的领域之一。矩阵和向量用于表示和变换图形、图像，例如，通过矩阵变换实现平移、旋转和缩放。
  - 计算机图形学：线性代数的概念如矩阵变换、仿射变换等在计算机图形学中被广泛使用，用于实现三维图形的渲染、投影和动画等。
  - 人工智能和机器学习：在机器学习中，线性代数是基础工具之一。矩阵和向量用于表示数据、模型参数和特征，矩阵运算用于实现模型的训练和预测。
  - 数据分析和统计学：线性代数在数据分析和统计学中扮演着关键角色。矩阵和向量可用于表示数据集，而奇异值分解、主成分分析等线性代数方法可用于数据降维和特征提取。
  - 计算机网络：线性代数的概念如矩阵和向量空间在计算机网络中有应用，例如，在路由算法、网络拓扑结构等方面。
  - 数据库：线性代数的方法在数据库领域有应用，例如，关系数据库中的关系运算可以用矩阵运算来表示。
  - 密码学：线性代数在密码学中被广泛应用。矩阵和向量的运算被用于设计和分析加密算法，例如，矩阵乘法在分组密码中的应用。
  - 计算机视觉：在计算机视觉中，线性代数用于处理图像和视频数据。例如，使用矩阵进行图像变换、处理和分析。

**★【课程】MIT 18.06 Linear Algebra** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1zx411g7gq/) [#课程主页](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/syllabus/) [#课程笔记](https://github.com/apachecn/mit-18.06-linalg-notes)
  - 地球上最好的线性代数课程，配套教材为 Gibert Strang 编写的《线性代数》。

**【书籍】线性代数 Introduction to Linear Algebra** [#豆瓣](https://book.douban.com/subject/34820335/)
  - Gibert Strang 编写的教材，本书内容包括行列式、矩阵、线性方程组与向量、矩阵的特征值与特征向量、二次型及Mathematica软件的应用等。每章都配有习题，书后给出了习题答案。本书在编写中力求重点突出、由浅入深、通俗易懂，努力体现教学的适用性。
  
**【书籍】Linear Algebra Done Right** [#豆瓣](https://book.douban.com/subject/26265880/)
   - 适合初学者的教材，篇幅短。

### 计算思维 Computational Thinking

计算思维是计算机科学中的一种思考方式，强调问题的抽象化、问题的分解、模式识别以及算法设计和评估。它是一种将计算机科学的概念和原则应用到解决问题的思考方法。

**【课程】MIT 18.S191 Introduction to Computational Thinking** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1y44y1W7NN/) [#油管](https://www.youtube.com/watch?v=3zTO3LEY-cM) [#课程主页](https://computationalthinking.mit.edu/Spring21/)
  - 这门课利用 Julia 编程语言，在图像处理、社会科学与数据科学、气候学建模三个 topic 下带领学生理解算法、数学建模、数据分析、交互设计、图例展示，让学生体验计算与科学的美妙结合。

### 面向计算机科学的数学

**【书籍】A Programmer's Introduction to Mathematics** [#豆瓣](https://book.douban.com/subject/36339849/)
  - 本书利用你对编程和软件思想的熟悉来教授数学知识。你将学习数学的中心对象和定理，包括图、微积分、线性代数、特征值、优化等。你还将深入了解数学文化中通常未被言明的态度，既学会阅读和写作证明，同时理解数学为何会是现在这个样子。在每个技术章节之间，都有一篇论文描述数学文化的不同方面，以及构成数学直觉的见解和元见解的讨论。在学习的过程中，我们将运用新的数学思想来创建奇妙的程序，从加密方案到神经网络再到双曲面镶嵌。每一章还包含一组练习，让你积极地自主探索数学主题。简而言之，这本书将教你如何参与数学。

**【书籍】具体数学 Concrete Mathematics, A Foundation of Computer Science** [#豆瓣](https://book.douban.com/subject/21323941/)
  - 本书介绍了计算机的数学基础，内容涉及求和、取整函数、数论、二项式系数、特殊数、母函数（发生函数）、离散概率、渐近等等，面向从事计算机科学、计算数学、计算技术诸方面工作的人员，以及高等院校相关专业的师生。

## 进阶课程

### 计算机系统 Computer Systems

主要关注计算机系统的整体结构、组件和运作原理。这门课程涵盖计算机硬件和软件的相互作用，强调操作系统、计算机体系结构、编程语言和应用软件之间的关系。

**★【课程】CMU 15-312: Introduction to Computer Systems** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1iW411d7hd) [#课程主页](http://csapp.cs.cmu.edu/) [Assignment](https://csapp.cs.cmu.edu/3e/labs.html)
  - CMU 的镇校神课，计算机科学三大经典神课之二。
  - 配套教材为《深入理解计算机系统》。

**★【课程】UC Berkeley CS61C: Great Ideas in Computer Architecture(a.k.a Machine Structures)** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1Lu411X7u7/)  [#课程主页](https://inst.eecs.berkeley.edu/~cs61c/fa21/)

**【课程】MIT 6.033: System Engineering** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV197411s7AU) [#课程主页](https://web.mit.edu/6.033/www/)
  - 配套教材为《深入理解计算机系统》。

**【课程】MIT 6.826: Principles of Computer Systems** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1Bt4y1Y7Hc) [#油管](https://www.youtube.com/watch?v=To6lsY24A8o&list=PLA6Ht2dJt3SITo6PYTyzr9832epkyFD48) [#课程主页](https://6826.csail.mit.edu/2020/)
  - 配套教材为《计算机系统设计原理》。

**★【书籍】(CSAPP)深入理解计算机系统 Computer Systems: A Programmer's Perspective**
  - 本书从程序员的视角详细阐述计算机系统的本质概念，并展示这些概念如何实实在在地影响应用程序的正确性、性能和实用性。全书共12章，主要内容包括信息的表示和处理、程序的机器级表示、处理器体系结构、优化程序性能、存储器层次结构、链接、异常控制流、虚拟存储器、系统级I/O、网络编程、并发编程等。书中提供大量的例子和练习，并给出部分答案，有助于读者加深对正文所述概念和知识的理解。

**【书籍】计算机组成与设计 Computer Organization and Design: The Hardware/Software Interface** [#豆瓣](https://book.douban.com/subject/34658252/)
  - 由 Patterson 和 Hennessy 编写的经典教材。本书有 MIPS 版、ARM 版、RISC-V 版三个版本。

**【书籍】(PCSD)计算机系统设计原理 Principles of Computer System Design, An Introduction** [#豆瓣](https://book.douban.com/subject/4087478/)
  - 计算机系统的基本原理横跨于操作系统、网络、数据库、分布式系统、程序设计语言、软件工程以及计算机体系结构等方面。通过详细分析每个基本原理的案例，本书演示了如何应用这些原理和抽象来解决实际的计算机系统设计问题，阐述了那些在实践中已证明是成功的抽象概念，如命令、远程过程调用、客户/服务器组织结构、文件系统、事务处理、修复复制、读/写一致性，以及认证与保密消息等概念。这些抽象概念使得计算机系统设计者可以用功能日益强大的模块来构建计算机系统，保护计算机系统避免从意外的编程错误到恶意入侵在内的各种故障。

### 分布式系统 Distributed Systems

分布式系统是由多个独立的计算机或服务器组成的系统，这些计算机或服务器通过网络相互连接和协作，以实现共同的目标。分布式系统的主要特点是它们分布在多个地理位置，并且可以同时处理多个任务或请求。

分布式系统广泛应用于各种领域，包括云计算、大数据处理、物联网、分布式数据库、分布式存储和分布式计算。它们提供了高可用性、高性能和可扩展性，使得复杂的任务和大规模计算成为可能。但同时，分布式系统的设计和管理也面临许多挑战，如数据一致性、容错性和性能优化等。因此，分布式系统的开发和维护需要深入的专业知识和技能。

**★【课程】MIT 6.824: Distributed System** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV16f4y1z7kn) [#课程主页](https://pdos.csail.mit.edu/6.824/schedule.html)

**★【书籍】数据密集型应用系统设计 Designing Data-Intensive Applications** [#豆瓣](https://book.douban.com/subject/30329536/)
  - 全书分为三个部分：第一部分主要讨论有关增强数据密集型应用系统所需的若干基本原则；第二部分将从单机的数据存储转向跨机器的分布式系统，这是扩展性的重要一步，将依次讨论数据远程复制、数据分区以及事务；第三部分主要针对产生派生数据的系统，所谓派生数据主要指在异构系统中，如果无法用一个数据源来解决所有问题，那么一种自然的方式就是集成多个不同的数据库、缓存模块以及索引模块。

**【书籍】Distributed Systems, An Algorithmic Approach** [#豆瓣](https://book.douban.com/subject/2607696/)
  - 本书在理论和实践之间取得平衡，每章都有一组练习，书籍以包含各种进程间通信技术和中间件服务的背景信息开始，然后介绍涵盖系统模型、正确性标准和证明技术的基础主题。该书还介绍了分布式系统中的许多重要范式，包括逻辑时钟、分布式快照、死锁检测、终止检测、选举以及几种图算法。作者还探讨了在不同应用中的失败和容错技术，如一致性、事务、群体通信、复制数据管理和自稳定性。最后，他探讨了现实世界的问题，包括分布式离散事件仿真和安全性、传感器网络以及点对点网络。

**【书籍】分布式系统原理与范型 Distributed Systems: Principles and Paradigms** [#豆瓣](https://book.douban.com/subject/3108801/)
  - 分布式系统的权威教材。本书分成了两大部分。第2～9章讨论的是分布式系统的的原理、概念和技术，包括通信、进程、命名、同步化、一致性和复制、容错性以及安全性等，而分布式应用的开发方法（即范型）在第10～13章中进行了讨论。
  - 中文译本几乎不可读。

**【书籍】Distributed Systems** [#豆瓣](https://book.douban.com/subject/26979326/)
  - 内容简单的分布式系统导论。

### 深入理解编程语言和程序

近些年来，许多程序设计人员都会推崇一种方法——“一开始只需要学会编程语言和一些框架，其余的知识在工作中即用即学（最终沦为复制粘贴侠、调包侠、调参侠，并且自大地认为这是编程的正道）”。这种方法确实培养了一些可以解决一定问题的技术人员。但是，对计算机科学幼稚的理解，会在遇到更多、更复杂的问题时陷入挣扎，浪费更多的时间。光是那些细枝末节上的错误就疲于应对了，根本没有时间去思考代码的可读性、可维护性，发挥自己的创造力。这是一座座“屎山”拔地而起的重要原因。

**★【书籍】计算机程序的构造与解释 Structure and Interpretation of Computer Programs（SICP）** [#豆瓣](https://book.douban.com/subject/1148282/) [#在线阅读](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html)
   - 编程必读经典，被成为“The Book”、“The Wizard Book（巫师之书）”。
   - MIT 入门计算机科学教材，在过去几十年引起了巨大的轰动。作者的出发点为：a.编程语言首先是写给人看的，只是恰巧能够运行（可读性）b.编程语言最重要的是控制复杂度，而非简洁的语法、高端的算法、数学之美。
   - 前半部分用大量的数学例子介绍编程的概念，后半部分通过实现解释器来讲解程序运作的过程。Brian Harvey 把课程总结为4个编程范式：函数式编程，面向对象，服务器-客户端，逻辑编程。

**★【课程】MIT: Structure and Interpretation of Computer Programs** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1Xx41117tr)
  - 计算机科学三大经典神课之首，强调通用的编程原理，而不仅仅是特定的编程语言。在书中，Scheme（Python）编程语言被用作教学工具，但强调的是通用的程序设计原则。"计算机程序的构造与解释"被认为是计算机科学和编程教育的经典之一，为许多人提供了深入理解计算机科学基础的良好起点。
  - 教材为计算机程序的构造与解释，纸质书的中文翻译较差，有能力直接学习英文版。

**★【课程】UC Berkeley CS61A: Computer Programs** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1v64y1Q78o) [#课程主页](https://inst.eecs.berkeley.edu/~cs61a/sp21/)
  - MIT SICP 课程的现代版本，使用 Python 语言教学。 
  - Brian Harvey 在 2011spring 第一节课的开场白是：“这里是cs61a，世界上最好的计算机课。”接着他又说道：“并不是因为我，而是因为我们用的教材——《计算机程序的构造与解释》。”

**【书籍】程序设计语言-实践之路 Programming Language Pragmatics** [#豆瓣](https://book.douban.com/subject/2152385/)
  - 这是一本很有特色的教材，其核心是讨论程序设计语言的工作原理和技术。本书融合了传统的程序设计语言教科书和编译教科书的有关知识，并增加了一些有关汇编层体系结构的材料，以满足没学过计算机组织的学生们的需要。书中通过各种语言的例子，阐释了程序设计语言的重要基础概念，讨论了各种概念之间的关系，解释了语言中许多结构的形成和发展过程，以及它们演化为今天这种形式的根源。书中还详细讨论了编译器的工作方式和工作过程，说明它们对源程序做了什么，以及为什么要那样做。书的每章最后附有复习题和一些更具挑战性的练习。这些练习的特别价值在于引导学生进一步深入理解各种语言和技术。本书第2版新增了脚本语言问题的讨论，涵盖 Perl、Python、Ruby、Tcl、PHP、JavaScript、XSLT 等和其他语言。

**【课程】MIT 6.031: Software Construction**
[#课程主页](https://web.mit.edu/6.031/www/sp21/)
  - 教授如何写出高质量、可维护、可理解的代码，以及如何构建软件。教学语言为 Java。

**【课程】CMU 15-150: Principles of Functional Programming** [#油管](https://www.youtube.com/watch?v=jjX68oHAw-Y&list=PLsydD1kw8jng2t2G8USQNLz0faYZetPnH) [#课程主页](https://www.cs.cmu.edu/~15150/)
  - 该课程的目的是介绍函数式编程（FP）的理论和实践。FP的特征是强调计算作为评估。传统的命令式编程（IP）中程序和数据的传统区分被替代为强调通过指定其适用行为的类型对表达式进行分类。类型包括熟悉的（固定和任意精度的）数值类型、元组和记录（structs）、分类值（objects）、归纳类型（如树）、具有指定输入和输出的函数以及输入和输出等命令。良好类型的表达式被评估以产生值，以一种保证是类型安全的方式。由于函数式程序不会引起副作用，我们可以利用在关于适用行为的推理和分析程序的运行时属性方面的简单数学原理。

**【书籍】Essentials of Programming Languages** [#豆瓣](https://book.douban.com/subject/3136252/)
  - 这教材提供对编程语言基本概念的深刻理解。该方法既是分析性的又是实践性的。文本使用在 Scheme 中编写的解释器，以清晰且可直接执行的方式表达许多基本语言元素的语义。它还审查了一些重要的程序分析。大量的练习探讨了许多设计和实现的选择。

### 并行计算 Parallel Computing

并行计算是一种在多个处理单元上同时执行计算任务的计算模型，旨在提高计算速度和处理能力。本课程主要讲授使用并行计算的多核处理器和多处理器系统、SIMD（单指令多数据）和MIMD（多指令多数据）架构，并行编程模型、并行算法以及并行性能分析和优化、任务调度和负载平衡、并行编程语言和工具。

**【课程】CMU 15-418: Parallel Computer Achitecture and Programming** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1SM4y1j7XL) [Video](http://15418.courses.cs.cmu.edu/spring2016/lectures) [#课程主页](http://15418.courses.cs.cmu.edu/spring2016/)

**【书籍】并行程序设计原理 Principles of Parallel Programming** [#豆瓣](https://book.douban.com/subject/3880304/)
  - 涉及现代并行硬件和软件技术，包括多核体系结构及其并行程序设计技术，侧重论述并行程序设计的原理，并论述了并行程序设计中一些深层次问题，如可扩展性、可移植性以及并行程序设计应遵循的方法学等。

**【书籍】Parallel and Concurrent Programming in Haskell: Techniques for Multicore and Multithreaded Programming** [#豆瓣](https://book.douban.com/subject/24294415/)
  - 这本书需要有足够的 Haskell 编程基础，涵盖了Haskell多样的并发和并行编程API的广泛选择。它分为两个部分。第一部分关于并行编程，涵盖了使用多个处理器加速CPU密集型计算的技术，包括在惯用的Haskell和基于数值数组的算法中使用并行ism的方法，以及在GPU上运行计算的方法。第二部分关于并发编程，介绍了使用多个线程的技术，包括重叠多个I/O操作，构建并发网络服务器以及在多台机器上进行分布式编程的方法。

### 编译原理 Compiler Theory

“编译原理”是计算机科学领域的一个分支，主要研究如何设计和实现编译器。编译器是将高级程序设计语言编写的源代码翻译成计算机可执行代码的软件工具。编译原理关注编译器的理论和实践，涉及从源代码到目标代码的各个阶段和过程。主要内容包括：
  - 词法分析（Lexical Analysis）：词法分析器负责将源代码转换成令牌序列，识别出源代码中的基本语法单元，如关键字、标识符、常量等。
  - 语法分析（Syntax Analysis）：语法分析器将令牌序列转换成抽象语法树，表示源代码的语法结构。语法分析检查源代码是否符合语法规则。
  - 语义分析（Semantic Analysis）：语义分析器检查源代码的语义是否合法，包括类型检查、作用域分析等。它确保源代码在语义上是正确的。
  - 中间代码生成（Intermediate Code Generation）：中间代码生成阶段将抽象语法树转换成一种中间表示形式，以便后续优化和目标代码生成阶段使用。
  - 代码优化（Code Optimization）：代码优化阶段对中间代码进行优化，以提高程序执行效率。优化包括常量折叠、循环优化、内联函数等技术。
  - 目标代码生成（Code Generation）：目标代码生成阶段将优化后的中间代码翻译成目标计算机的汇编语言或机器代码。
  - 代码组织（Code Organization）：代码组织阶段将生成的目标代码组织成可执行文件，包括链接、地址分配等。
  - 错误处理（Error Handling）：编译器需要处理源代码中可能出现的错误，并提供有关错误的详细信息。

**★【课程】Stanford CS143: Compilers** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1NE411376V/) [#课程主页](http://web.stanford.edu/class/cs143/) [#参考资料](https://github.com/AllenWrong/Self-learning-Record/blob/master/CS143%20Compiler.md)
  - 课程讲授词法分析、语法分析、语义分析、运行时环境、寄存器分配、代码优化与生成等内容，逐步实现 COOL 语言的编译器。

**★【书籍】Crafting Interpreters** [#豆瓣](https://book.douban.com/subject/35548379/) [#在线阅读](https://craftinginterpreters.com/)
 - 本书包含了实现一个功能齐全、高效的脚本语言所需的一切。你将学到关于解析和语义的高级概念，以及字节码表示和垃圾回收等细节。

**【书籍】(Dragon Book)Compilers, Princeples, Techiques, and Tools** [#豆瓣](https://book.douban.com/subject/5416783/)
  - “龙书”，编译领域的经典著作。本书全面介绍了编译器的设计，并强调编译技术在软件设计和开发中的广泛应用。每章中都包含大量的习题和丰富的参考文献。

**【书籍】(Tiger Book)Modern Compiler Implementation in C** [#豆瓣](https://book.douban.com/subject/1806974/)
  - “虎书”，编译领域的经典著作。全面讲述了现代编译器的结构、编译算法和实现方法。本书特点是增加了一些其他编译原理教科书没有涉及的内容。前端增加了面向对象的程序设计语言、函数式程序设计语言等现代语言的编译实现方法，后端增加了针对现代计算机体系结构特征的一些比较成熟的优化方法。这部分内容展现了现代商业编译器需解决的一些关键问题。

**【书籍】(Whale Book)Advanced Compiler Design and Implementation** [#豆瓣](https://book.douban.com/subject/1400374/)
  - “鲸书”，编译领域的经典著作。本书涵盖了现代微处理器编译器的设计和实现方面的所有高级主题。本书首先介绍编译器的结构、符号表管理、中间代码结构、运行时支持等问题，探讨过程内的控制流分析、数据流分析、依赖关系分析和别名分析的各种方法，并介绍一系列的全局优化。接下来，讲述过程间的控制流分析、数据流分析和别名分析，以及程间优化和如何应用过程间信息来改善全局优化。然后，讨论有效利用层次存储系统的优化技术。最后，详细介绍4种商业化编译系统，以提供编译器结构、中间代码设计、优化策略和效果的专门例子。

**【书籍】Language Implementation Patterns: Create Your Own Domain-Specific and General Programming Languages** [#豆瓣](https://book.douban.com/subject/10482195/)
  - 本书注重实践，以 Java 语言描述，帮助读者构建自己的语言应用。这里的语言应用并非特指用编译器或解释器实现编程语言，而是泛指任何处理、分析、翻译输入文件的程序，比如配置文件读取器、数据读取器、模型驱动的代码生成器、源码到源码的翻译器、源码分析工具、解释器，以及诸如此类的工具。为此，作者举例讲解已有语言应用的工作机制，拆解、归纳出31种易于理解且常用的设计模式（每种都包括通用数据结构、算法、策略）。

### 高级算法 Advanced Algorithms

**【课程】UC Berkeley CS170: Efficient Algorithms and Intractable Problems** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1BU4y1b7RK/) [#油管](https://www.youtube.com/playlist?list=PLkFD6_40KJIyKLUW_4cm44mIdXSUpZry3)
  - 进阶课，讲授图算法、贪婪算法、动态规划、线性规划、快速矩阵乘法、傅立叶变换、数论、复杂性和NP-完备性以及算法的设计和分析。

**【课程】MIT 6.046: Design and Analysis of Algorithms**
[#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1A7411E737/) [#课程主页](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/)
  - 配套教材为《算法导论》。

**【课程】MIT 6.851: Advanced Data Structure**
[#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1Z3411r7za/)

**【课程】MIT 6.854: Advanced Algorithms**
[#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV11E411u73m/)

**【书籍】Algorithm Design** [#豆瓣](https://book.douban.com/subject/1475870/)
  - 该书教授学生一系列在计算应用中出现的问题的设计和分析技术。本文鼓励理解算法设计过程，并欣赏算法在计算机科学更广泛领域中的作用。更注重为具体问题设计算法、算法的设计目的、设计时的 trade-off，并且采用实例教学。

### 高级数据库系统 Advanced Database Systems

高阶数据库课程通常针对数据库理论和技术的深入学习。这些课程旨在扩展学生对数据库管理系统（DBMS）的基本概念的理解，并介绍更高级的主题，包括数据库设计、查询优化、事务管理、数据仓库、数据挖掘和数据库安全等。

**【课程】Stanford CS 346: Database System Implementation**
[#课程主页](https://web.stanford.edu/class/cs346/2015/) [Github](https://github.com/junkumar/redbase.git)

**【课程】CMU 15-799: Special Topics in Database Systems**
  - 2013 版本讨论了 Streaming、Graph DB、NVM 等话题，2022 版本主要讨论 Self-Driving DBMS。

### 数值分析 Numerical Analysis

数值分析是数学的一个分支，主要关注于**使用数值逼近方法解决数学分析中的问题**。它涉及开发、分析和实现算法来获得数学问题的数值解决方案，特别是对于那些无法找到精确解的问题。数值分析在工程、物理、经济学和其他科学领域的计算和建模中起着关键作用。

**【课程】MIT 18.330: Introduction to Numerical Analysis** [#课程主页](https://github.com/mitmath/18330) [Assignment](https://github.com/PKUFlyingPig/MIT18.330)
  - 配套教材为 Fundamentals of Numerical Computation [Github Book](https://fncbook.github.io/fnc/frontmatter.html)
  - 内容涉及了浮点编码、Root finding、线性系统、微分方程等等方面，整门课的主旨就是让你利用离散化的计算机表示去估计和逼近一个数学上连续的概念。

**【课程】MIT 18.335: Introduction to Numerical Method** [#课程主页](https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/)

### 工作实践中的技术

**★【课程】MIT Null: 计算机教育缺失的一课 The Missing Semester of Your CS Education** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1uc411N7eK) [#油管](https://www.youtube.com/watch?v=Z56Jmr9Z34Q) [#课程主页](https://missing.csail.mit.edu/2020/potpourri/)
  - 讲义：[原链接](https://missing.csail.mit.edu/) 中文讲义：[Github](https://missing-semester-cn.github.io/)
  - 本课程主要讲授熟练使用软件工具，包括命令行、文本编辑器、版本控制系统等。

#### Linux 操作系统和 Shell

Linux 是一种流行的`开源操作系统`，它是基于Unix的多用户、多任务的操作系统。Linux 最初由林纳斯·托瓦兹（Linus Torvalds）于1991年创建，现在由全球的开发者社区共同维护和开发。它以其`稳定性`、`安全性`和`灵活性`而闻名，并被广泛应用于服务器、桌面、移动设备、嵌入式系统等多种环境中。

Linux 是地球上**最泛用的操作系统**——不仅在服务器市场占据主导地位，也被广泛用于云计算和大数据环境。同时，它在个人电脑和工作站领域也逐渐流行，尤其是对于开发者和高级用户。此外，Linux 也是许多嵌入式系统和移动设备（如Android）的基础。这是一份关于 Linux 究竟在世界上多么活跃的统计：[Linux Statistics](https://99firms.com/blog/linux-statistics/)。

**【教程】命令行的艺术** [#Github](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
 
**【教程】Linux 101** [#主页](https://101.lug.ustc.edu.cn/)

**【书籍】鸟哥的 Linux 私房菜** [#豆瓣](https://book.douban.com/subject/4889838/)
  - 最具知名度的Linux入门书，全面而详细地介绍了Linux操作系统。全书分为5个部分：第一部分着重说明Linux的起源及功能，如何规划和安装Linux主机；第二部分介绍Linux的文件系统、文件、目录与磁盘的管理；第三部分介绍文字模式接口 shell和管理系统的好帮手shell脚本，另外还介绍了文字编辑器vi和vim的使用方法；第四部分介绍了对于系统安全非常重要的Linux账号的管理，以及主机系统与程序的管理，如查看进程、任务分配和作业管理；第五部分介绍了系统管理员(root)的管理事项，如了解系统运行状况、系统服务，针对登录文件进行解析，对系统进行备份以及核心的管理等。

#### 使用 Git 和 Github

**版本控制工具 Git** —— Git 是一个开源的分布式版本控制系统，当前最流行的`源代码管理`工具之一，被广泛用于软件开发和其他版本控制任务。

**【教程】Git使用教程**[#Zhihu](https://zhuanlan.zhihu.com/p/615581394)

**【教程】Github 官方指南**[#Github](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

#### 使用 IDE 或者编辑器

**集成开发环境（IDE）**是软件开发中的一个重要组件，它集成了多种工具来协助程序员进行高效的编码、调试和测试。
  - Eclipse：适用于Java、C/C++、Python、PHP等多种语言。Eclipse是一个开源项目，具有强大的插件生态系统。
  - Visual Studio：由微软开发，是一个功能强大的IDE，支持C#、C++、VB.NET等语言，主要用于Windows平台的应用开发。
  - IntelliJ IDEA：由JetBrains开发，主要用于Java开发，但也支持其他语言如Kotlin、Groovy等。它以智能编码辅助和强大的功能而闻名。
  - NetBeans：另一个适用于Java的IDE，但也支持其他语言如PHP、C/C++和HTML5。NetBeans是一个开源项目，提供了多种工具和插件。
  - PyCharm：专为Python开发设计的IDE，由JetBrains开发。它提供了许多针对Python开发的强大功能，包括调试、项目管理和版本控制集成。
  - Visual Studio Code：微软开发的轻量级但功能强大的源代码编辑器，支持几乎所有主流编程语言。它提供了丰富的插件扩展，非常适合前端开发和轻量级编程任务。
  - Xcode：苹果公司开发的IDE，专门用于开发macOS和iOS应用。它是开发任何Apple平台应用的首选工具。
  - Android Studio：谷歌官方的Android应用开发IDE，基于IntelliJ IDEA。它提供了一系列工具来设计界面、编写和调试代码，以及性能分析。
  - Atom：由GitHub开发的开源文本编辑器，支持多种编程语言。虽然它是一个文本编辑器，但可以通过插件扩展为类似IDE的环境。
  - Sublime Text：是一个流行的代码编辑器，以其速度快和界面美观而著称。它也可以通过插件增强功能，类似于轻量级的IDE。

**选择适合自己的 IDE**：使用取决于多个因素，包括你的编程语言、项目类型、个人偏好和特定的功能需求。以下是一些在选择IDE时可以考虑的关键因素：
  - 编程语言支持：不同的IDE支持不同的编程语言。选择一个对你使用的语言提供良好支持的IDE至关重要。例如，如果你是Java开发者，你可能会选择Eclipse或IntelliJ IDEA。
  - 项目类型：不同的IDE可能针对特定类型的项目优化，如移动应用、桌面软件、Web开发等。选择一个与你项目类型匹配的IDE可以提高开发效率。
  - 易用性和学习曲线：一些IDE用户界面直观且容易上手，而另一些可能功能更强大但需要更长时间学习。根据你的经验和学习意愿选择。
  - 性能要求：考虑你的开发机器的性能。一些IDE（如Visual Studio或IntelliJ IDEA）可能资源占用较多，而轻量级IDE（如Visual Studio Code或Sublime Text）对系统资源的要求较低。
  - 集成工具和功能：考虑你需要哪些附加功能，如数据库工具、版本控制系统、调试工具、自动化构建工具等。
  - 定制化和扩展性：一些IDE（如Visual Studio Code和Atom）提供了广泛的插件生态系统，允许你根据需要添加额外功能。
  - 成本：某些IDE是免费的，而其他IDE可能需要付费，尤其是企业版。考虑你的预算以及是否需要付费IDE提供的额外功能。
  - 社区和支持：一个活跃的社区可以提供插件、工具、教程和支持。流行的IDE往往拥有更大的社区支持。
  - 个人偏好：最终，选择IDE也取决于个人喜好。尝试几个不同的IDE，看看哪个最符合你的工作流和偏好。
  - 跨平台支持：如果你需要在不同的操作系统上工作，选择一个支持跨平台的IDE可能很重要。

#### 使用 Docker

Docker 是一种开源的容器化平台，它允许开发者将应用程序及其依赖打包在一个轻量级、可移植的容器中。这些容器可以在任何支持Docker的机器上运行，从而确保应用程序在不同环境中的一致性和可扩展性。Docker 在2013年首次发布，迅速成为容器化技术中最受欢迎的平台之一。Docker 的主要特点和优势包括：
  - 容器化：Docker 使用容器来运行应用程序。容器是一个轻量级的、可执行的软件包，包含运行应用所需的一切：代码、运行时环境、库、环境变量和配置文件。
  - 跨平台兼容性：Docker 容器可以在任何支持Docker的操作系统上运行，包括Linux、Windows和macOS。这消除了常见的“在我的机器上运行正常”的问题。
  - 隔离性：每个Docker容器都在自己的隔离环境中运行。这提高了安全性，因为容器之间互不干扰，并且与宿主机系统分离。
  - 可重复性：Docker 确保应用在开发、测试和生产环境中的一致性，因为每个环境都使用相同的Docker容器。
  - 便捷的镜像管理：Docker使用镜像来创建容器。Docker镜像是容器的模板，可以轻松地构建、复制和共享。
  - Docker Hub和Registry：Docker Hub是一个公共的镜像仓库，用户可以从中下载和共享镜像。企业也可以使用私有的Registry来存储和管理自己的镜像。
  - 快速部署和扩展：Docker 容器可以几秒钟内启动，使得部署和扩展应用变得快速和灵活。
  - 微服务架构的支持：Docker 非常适合微服务架构，因为每个服务都可以在独立的容器中运行，易于管理和扩展。
  - 开发者友好：Docker 简化了配置过程，使开发者可以专注于编写代码，而不是环境设置。

**【文档】Docker for Beginners** [【豆瓣】](https://docker-curriculum.com/)

### 更多编程语言

#### Agda

Agda 是一种`函数式`编程语言和`证明助手`。它主要用于研究和`构造形式化证明`和`编写高度安全且可靠的程序`。Agda 的核心特性是其`依赖类型系统`，这增加了语言的表现力和灵活性，使得能够以编程的方式表达数学证明。
  - Agda 的类型系统允许类型依赖于值（依赖类型），并且是一种纯函数式语言。由于其强大的类型系统，Agda 被广泛用于在编程语言中表达和验证数学定理和逻辑证明。在 Agda 中，编程和证明是相互融合的。可以用相同的语言编写程序和证明程序的属性。Agda 支持诸如高阶类型、复杂的类型运算和模式匹配等高级特性。

**【书籍】Verified Functional Programming in Agda** [#豆瓣](https://book.douban.com/subject/26798747/)
  - 第一本系统阐述了Agda中的外部和内部验证的书籍，适用于计算机科学本科生。书中不需要对函数式编程或计算机检查的证明有任何了解。书籍从通过熟悉的例子如布尔值、自然数和列表介绍函数式编程以及外部验证的技术开始。通过向量、二叉搜索树和Braun树的例子来考虑内部验证。书中还包括关于类型级计算、关于终止的明确推理以及通过评估进行归一化的高级内容。书籍还包括了一个关于Huffman编码和解码的中等规模案例研究。

#### C

C 语言是一种通用的高级编程语言，由 Dennis Ritchie 在 1972 年于贝尔实验室开发。它为程序员提供了很大的控制权，但也需要谨慎处理内存和指针，以避免潜在的错误。因此，C语言对于那些希望深入了解计算机编程的人来说是一门重要的语言。它是一种强大的编程语言，广泛用于系统编程、嵌入式编程、应用程序开发和游戏开发等领域。

**【书籍】C程序设计语言 The C Programming Language** [#豆瓣](https://book.douban.com/subject/1139336/) [Free PDF Copy](http://cslabcms.nju.edu.cn/problem_solving/images/c/cc/The_C_Programming_Language_%282nd_Edition_Ritchie_Kernighan%29.pdf)

#### C++

C++ 是一种高级编程语言，由Bjarne Stroustrup 在1980年代初期开发，作为 C 语言的扩展。C++ 添加了`面向对象编程`等特性，同时保留了 C 的`效率`和`灵活性`，使其成为系统软件、应用软件、高性能服务器和客户端应用程序、以及性能敏感的游戏和实用程序的常用语言。C++ 支持面向对象编程，包括类、继承、多态、封装和抽象。

**【书籍】Problem Solving with C++** [#豆瓣](https://book.douban.com/subject/10529141/)

#### Common Lisp

Common Lisp 是 Lisp 编程语言家族中的一种方言，是一种`多范式`的编程语言，以其强大的`宏系统`、`动态类型`和交互式开发环境而闻名。Common Lisp 起源于 1980 年代，是基于几个早期 Lisp 方言（如 Maclisp、Zetalisp 和 NIL）的特性和思想开发而成的。它是 Lisp 语言的一个标准化形式，并且是目前最完整和最强大的 Lisp 方言之一。

**【书籍】实用Common Lisp编程 Practical Common Lisp** [#豆瓣](https://book.douban.com/subject/6859720/)


#### Coq

Coq 是一个`形式化证明管理系统`，用于帮助编写数学证明并验证这些证明的正确性。它是一个交互式定理证明器，允许用户定义数学概念、表述定理，并通过一系列逻辑推理构造证明。Coq 在数学和计算机科学领域都非常有用，特别是在那些要求高度精确和正确性保证的领域。

**【书籍】** [#豆瓣]()

- [**Certified Programming with Dependent Types (CPDT)**](https://www.amazon.com/Certified-Programming-Dependent-Types-Introduction/dp/0262026651/ref=sr_1_fkmrnull_1?keywords=Certified+Programming+with+Dependent+Types&qid=1555168397&s=books&sr=1-1-fkmrnull), 2013, Adam Chlipala

#### Erlang

Erlang 是一种高级编程语言，最初由爱立信公司在1980年代为支持大规模的`并发`、`分布式系统`而开发。它最初是设计用于在电信系统中处理大量并发活动的，但后来被广泛应用于构建可伸缩、高可用性的服务器系统和分布式应用程序。

**【书籍】Learn You Some Erlang for Great Good!: A Beginner's Guide** 

#### Haskell

Haskell 是一种`纯函数式`编程语言，拥有一个非常强大且灵活的`强类型系统`，支持高级特性，如类型推断、泛型编程和类型多态。Haskell 默认采用`惰性求值`（Lazy Evaluation），这意味着表达式的值仅在需要时计算。Haskell 引入了`类型类`（Type Classes）的概念，它是一种表示一组类型共享某些行为的方式，类似于其他语言中的接口。Haskell 提供了模式匹配和列表推导等强大的语法结构，使得代码更加简洁易读。Haskell 支持多种并发和并行编程模型，包括软件事务内存（STM）。

**【书籍】Real World Haskell** [#豆瓣](https://book.douban.com/subject/3134515/)
  - 专为有经验的程序员编写，以迅速的步调带您了解函数式编程的基础知识，并在每一章中帮助您增进对 Haskell 在实际问题（如 I/O、性能、数据处理、并发等）中的理解。通过这本书，您将：
    - 了解程序式和函数式编程之间的区别
    - 学习 Haskell 的编译器、解释器、值、简单函数和类型
    - 熟悉 Haskell 的库，并编写您自己的库
    - 使用单子表达 I/O 操作和状态变化
    - 与数据库交互，解析文件和数据，处理错误
    - 发现如何将 Haskell 用于系统编程
    - 学习 Haskell 中的并发和并行编程

**【书籍】Parallel and Concurrent Programming in Haskell: Techniques for Multicore and Multithreaded Programming** [#豆瓣](https://book.douban.com/subject/24294415/)
  - 这本书需要有足够的 Haskell 编程基础，涵盖了Haskell多样的并发和并行编程API的广泛选择。它分为两个部分。第一部分关于并行编程，涵盖了使用多个处理器加速CPU密集型计算的技术，包括在惯用的Haskell和基于数值数组的算法中使用并行ism的方法，以及在GPU上运行计算的方法。第二部分关于并发编程，介绍了使用多个线程的技术，包括重叠多个I/O操作，构建并发网络服务器以及在多台机器上进行分布式编程的方法。

#### Idris

Idris 是一种相对较新的`纯函数式`编程语言，特别强调`依赖类型`（Dependent Types）的使用。这种`强类型系统`允许类型依赖于值，比传统的类型系统更强大，可以在类型级别上编码更多的逻辑和属性，使得程序员可以编写更加精确和表达丰富的程序。Idris 的设计旨在支持纯函数式编程，同时提供强大的类型检查，以帮助开发者构建更加安全和可靠的软件。Idris 提供了自动类型推断功能，可以减少编写类型注解的需要，同时保持代码的类型安全。

**【书籍】Programming in IDRIS, A Tutorial**

**【书籍】Type-driven Development with Idris**

#### Java

Java 是一种广泛使用的高级编程语言，由Sun Microsystems（现为Oracle的一部分）在1995年发布。它被设计成一种通用、`面向对象`、类似C++但更简单的编程语言。Java 的设计哲学强调了可移植性、高性能、健壮性和安全性，使其一度成为企业应用、网络应用、桌面应用、移动设备和嵌入式系统开发的热门选择。
  - Java 的口号是“一次编写，到处运行”。这是因为其运行在`Java虚拟机（JVM）`上，不需要考虑底层硬件和操作系统。

**【书籍】Effective Java**

**【书籍】Core Java**

#### Javascript

JavaScript 是一种`动态类型`的多范式的编程语言（`事件驱动`、`函数式`、`面向对象`），最初由Netscape的Brendan Eich在1995年设计。尽管它最初被创建为网页浏览器中的脚本语言，但如今它已发展成为一种广泛用于客户端和服务器端的通用编程语言。JavaScript 是构建现代网页和网络应用的核心技术之一，与HTML和CSS一起构成了万维网的三大支柱。

**【书籍】JavaScript Programmer's Reference**

> Javascript 的命名据说是开发者蹭 Java 的热度而来，两者关系甚微。

#### Kotlin

Kotlin 是一种现代的`静态类型`的编程语言，由JetBrains公司在2011年首次发布。它被设计为`完全兼容 Java`，并能在 `Java 虚拟机（JVM）`上运行，但在语法和功能上进行了现代化的改进。Kotlin 的目标是提供一种比 Java 更简洁、更安全且更表达性的语言，同时保持与Java的高度兼容性。

**【书籍】Fundamental Kotlin**

#### Matlab 

MATLAB（Matrix Laboratory的缩写）是由MathWorks公司开发的一种高性能的`数值计算`和`可视化编程`环境和语言。自1984年推出以来，MATLAB已经成为科学、工程和数学领域中广泛使用的工具之一，特别适用于矩阵运算、算法实现、数据分析、信号处理和图形可视化。

**【书籍】MATLAB Primer**

#### OCaml

OCaml（Objective Caml的缩写）是一种高级编程语言，是Caml语言的最新版本，由法国国家信息与自动化研究所（INRIA）开发。其特点为：`强类型`、采用`静态类型`系统，拥有灵活的模块系统，结合了`函数式编程`、`命令式编程`和`面向对象编程`的特性，提供了一个快速而有效的编译器以及丰富的库。

**【书籍】OCaml Programming: Correct + Efficient + Beautiful** [Github在线书籍](https://cs3110.github.io/textbook/cover.html) [#油管](https://www.youtube.com/playlist?list=PLre5AT9JnKShBOPeuiD9b-I4XROIJhkIU)

**【书籍】Real World OCaml** [#豆瓣]()

#### Prolog

Prolog（Programming in Logic的缩写）是一种高级编程语言，主要用于`逻辑编程范式`。Prolog 特别适合于处理符号和非数值计算的问题，常用于人工智能和计算语言学领域。其特点为：
  - 逻辑编程：Prolog 基于形式逻辑，程序是一系列的事实和规则，表示为逻辑公式。
  - 事实和规则：在Prolog中，程序由一系列事实（描述世界的基本陈述）和规则（描述事物之间关系的逻辑表达式）构成。
  - 查询系统：Prolog 程序的运行基于对数据库的查询。用户提出问题，Prolog 通过在事实和规则中搜索来尝试解答这个问题。
  - 模式匹配：Prolog 使用模式匹配技术来选择和应用规则。
  - 回溯：Prolog 自动执行回溯来找到问题的所有可能答案。

**【书籍】Computing With Logic: Logic Programming With Prolog** [#豆瓣](https://book.douban.com/subject/10551496/)

#### R

R 语言是一种专门用于`统计分析`、`数据可视化`和`计算机数据挖掘`的编程语言和软件环境，提供了广泛的统计（线性和非线性建模、经典统计测试、时间序列分析、分类、聚类等）和图形技术。R 以其强大的图形和可视化能力而闻名。它可以很容易地创建高质量的图表和数据可视化图形。

**【书籍】R for Data Science: Visualize, Model, Transform, Tidy, and Import Data** [#豆瓣](https://book.douban.com/subject/30277904/)
  - 本书的目标是教会读者使用最重要的数据科学工具，从而为实施数据科学奠定坚实的基础。读完本书后，你将掌握R语言的精华，并能够熟练使用多种工具来解决各种数据科学难题。每一章都按照这样的顺序组织内容：先给出一些引人入胜的示例，以便你可以整体了解这一章的内容，然后再深入细节。本书的每一节都配有习题，以帮助你实践所学到的知识。

#### Racket

Racket 是一种多范式的编程语言（`函数式`、`命令式`、`逻辑式`和`面向对象`编程），最初是为了教育和研究而设计，但现在它也被广泛用于工业和商业应用。Racket 最初基于 Scheme，后者是 Lisp 家族的一个成员，因此它继承了 Lisp 的许多特性，如其强大的`宏系统`和简洁的语法。Racket 的设计哲学`鼓励创建新的编程语言和工具`，作为解决特定问题的方式。Racket 有一个庞大的标准库，提供了从图形界面到网络编程的各种功能。

**【课程】Brown CS173: Programming Languages** [#Bilibili 无字幕](https://www.bilibili.com/video/BV1iK4y1j7wj) [#课程主页](https://cs.brown.edu/courses/cs173/2012/)
  - 配套教材为 Programming Languages: Application and Interpretation。

**【书籍】(PLAI)Programming Languages: Application and Interpretation** [#豆瓣](https://book.douban.com/subject/11628134/) [#啊玛粽](https://www.amazon.com/Programming-Languages-Application-and-Interpretation/dp/B00262R7B0/ref=sr_1_1?keywords=Programming+Languages+Application+and+Interpretation&qid=1555161364&s=books&sr=1-1) [Free Copy](https://cs.brown.edu/courses/cs173/2012/book/book.pdf)
  - 这本书结合了两种教授编程语言的方法，一种基于对编程语言的概览，另一种基于编写定义性解释器。

#### Rust

Rust 是一种现代编程语言，专注于安全性、速度和`并发性`。它由 Mozilla Research 开发，旨在提供C++等系统编程语言的性能，同时确保更高的安全性和更易于管理的代码结构。
  - Rust 的最大卖点之一是其`内存安全保证`。通过所有权（ownership）、借用（borrowing）和生命周期（lifetimes）的概念，Rust 在编译时防止数据竞争和空指针等常见错误，而无需垃圾收集。
  - Rust 被设计为`系统级编程语言`，意味着它非常适合开发操作系统、游戏引擎、文件系统等底层应用。

**【课程】Stanford CS110L: Safety in Systems Programming** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1dh4y1T75r)

**【课程】KAIST CS431/CS492: Concurrent Programming** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1Xp4y1w7xG)

**【书籍】Rust程序设计 Programming Rust** [#豆瓣](https://book.douban.com/subject/36547630/)
  - 书中全面介绍了Rust这种新型系统编程语言——具有无与伦比的安全性，兼具C和C++的高性能，并大大简化了并发程序的编写。第2版对上一版内容进行了重组和完善，新增了对“异步编程”的介绍。借助书中的大量案例，你也能用Rust编写出兼顾安全性与高性能的程序。本书内容包括基本数据类型、所有权、引用、表达式、错误处理、crate与模块、结构、枚举与模式等基础知识，以及特型与泛型、闭包、迭代器、集合、字符串与文本、输入与输出、并发、异步编程、宏等进阶知识。

#### Scala

Scala 是一种多范式的编程语言（支持`面向对象`和`函数式编程`范式），设计用来表达通用的编程模式以简洁、优雅和类型安全的方式。它集成了面向对象编程和函数式编程的特性。Scala 运行在 Java 虚拟机（JVM）上，因此它与 Java 有很高的兼容性，可以直接使用 Java 的类库。

**【书籍】Programming in Scala: A comprehensive Step-by-Step Scala Programming Guide** [#豆瓣](https://book.douban.com/subject/3338669/)
  - 关于Scala的权威书籍，Scala是Java平台上的一种新语言，将面向对象和函数式编程概念融合到一种独特而强大的开发工具中。

### 计算机代数系统

计算机代数系统（Computer Algebra System，简称CAS）是一类专门用于执行符号计算的软件系统。符号计算是指对数学表达式中的符号进行操作，而不是仅仅进行数值计算。这些系统能够处理代数表达式、方程、多项式、矩阵等符号形式的数学对象。

计算机代数系统可以执行诸如化简代数表达式、解方程、求导、积分、展开多项式、因式分解等符号计算操作。这使得它们在数学、科学工程、计算机科学等领域中得到广泛应用。

主要的计算机代数系统包括：
  - Mathematica：由Wolfram Research公司开发，提供广泛的符号计算和可视化功能。
  - Maple：由Maplesoft公司推出，用于执行符号和数值计算。
  - Maxima：一个开源的计算机代数系统，提供类似于商业软件的功能。
  - SageMath：一个免费的开源数学软件系统，集成了多个开源数学工具，包括Maxima、NumPy、SymPy等。

**【书籍】Modern Computer Algebra** [#豆瓣](https://book.douban.com/subject/2691152/)
  - 计算机代数系统在科学和工程的各个领域都变得越来越重要。这本教材深入介绍了计算机代数系统中数学引擎的算法基础。它设计用于高级本科生或研究生的计算机科学或数学的一学期或两学期课程。其全面性和权威性也使其成为该领域专业人士的重要参考。特点包括：对算法的详细研究，包括时间分析；对多个主题的实现报告；数学基础的完整证明；广泛的应用（包括化学、编码理论、密码学、计算逻辑以及日历和音阶设计等）。

**【书籍】An Introduction to Modern Mathematical Computing: with Maple** [#豆瓣](https://book.douban.com/subject/10160900/)
  - 三十年前，与应用数值计算相比，数学计算很难进行，因此使用相对较少。有三个因素改变了这种情况：个人计算机的出现；光纤的发现以及现代互联网的发展；以及Maple、Mathematica和Matlab等三个数学工具的建立。我们打算说服人们，Maple等类似工具值得了解，只要一个人希望成为数学家、数学教育工作者、计算机科学家、工程师或科学家，或者任何希望/需要更好地使用数学的人。我们还希望解释如何在学习更好地证明事物的同时成为一名实验数学家。为了实现这一目标，我们的材料分为三个主要章节，然后是一个附录。这些章节涵盖了初等数论、一元和多元微积分、初等线性代数以及可视化和交互式几何计算。

## 人工智能相关

### 人工智能 Artificial Intelligence

人工智能是一门研究如何使计算机系统具有智能行为的学科。这种智能行为涵盖了模拟人类智能的各个方面，包括学习、推理、问题解决、感知、语言理解等。

**【书籍】人工智能: 一种现代方法 Artificial Intelligence: A Modern Approach（AIMA）**
  - 由 Stuart Russell 和 Peter Norvig 合著的一本广受欢迎的人工智能教材经典。书籍全面涵盖了人工智能的各个方面，包括知识表示、推理、规划、机器学习、自然语言处理等。强调一种现代方法，旨在统一不同领域的人工智能技术，并将其整合为一个协同工作的整体。

**【课程】MIT 6.034: Artificial Intelligence** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1P7411Y7Ud) [#课程主页](https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/)
  - 这门课程介绍了人工智能的基本知识表示、问题解决和学习方法。完成 6.034 后，学生应能够通过组装对具体计算问题的解决方案来开发智能系统；理解知识表示、问题解决和学习在智能系统工程中的作用；并从计算的角度欣赏问题解决、视觉和语言在理解人类智能中的作用。

**【课程】UC Berkeley CS188: Introduction to Artificial Intelligence** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1r3411p7H8)
  - 入门课程，搜索剪枝、约束满足问题、马尔可夫决策过程、强化学习、贝叶斯网络、隐马尔可夫模型以及基础的机器学习和神经网络的相关内容。
  - 教材为《人工智能: 一种现代方法》。

**【课程】Havard CS50: Introduction to Artificial Intelligence with Python** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1HB4y1C7XM/) [#课程主页](https://cs50.harvard.edu/ai/2020/)
  - 简单的入门课程，探讨了现代人工智能基础的概念和算法，深入研究了导致技术如游戏引擎、手写识别和机器翻译等出现的思想。通过实际项目，学生将接触到图搜索算法、分类、优化、强化学习等人工智能和机器学习领域的理论，并将它们应用到自己的Python程序中。在课程结束时，学生将具有使用机器学习库的经验，同时掌握人工智能原理，使他们能够设计自己的智能系统。

**【书籍】Paradigms of Artificial Intelligence Programming, Case Studies in Common LISP** [#豆瓣](https://book.douban.com/subject/1754619/)
  - 第一本在构建主要AI系统的背景下教授高级 Common Lisp 技术的教材。通过使用最先进的 Common Lisp 重建真实而复杂的AI程序，该书教授学生和专业人士如何构建和调试健壮的实用程序，同时演示卓越的编程风格和重要的 AI 概念。作者强调编写实际规模的真正工作程序涉及的实际性能问题。书中包括有关故障排除和效率的章节，以及关于面向对象编程基础和主要 CLOS 函数的描述。这本书是一门 AI 编程课程的优秀教材，对于一般的 AI 课程是一个有用的补充，对于专业程序员来说是一本不可或缺的参考书。

### 数据科学 Data Science

“数据科学”是一门涉及从大量数据中提取信息、洞察和知识的跨学科领域。数据科学将统计学、机器学习、计算机科学和领域专业知识相结合，以分析和解释复杂的现实世界数据。

**【课程】UC Berkeley Data100: Principles and Techniques of Data Science** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1xt4y1S7ay) [#课程主页](https://ds100.org/) [Textbook](https://www.textbook.ds100.org/intro.html)
  - 入门课程，讲授包括数据清洗、特征提取、数据可视化以及机器学习和推理的基础内容，也会讲授 Pandas, Numpy, Matplotlib 等数据科学常用工具。

**【书籍】Foundations of Data Science** [#豆瓣](https://book.douban.com/subject/34792326/)
  - 这本书介绍了数据科学的数学和算法基础，包括机器学习、高维几何和大网络分析。主题涵盖了高维数据的反直觉性质，诸如奇异值分解等重要的线性代数技术，随机游走和马尔可夫链理论，机器学习的基本概念和重要算法，以及用于聚类的算法和分析，大网络的概率模型，包括主题建模和非负矩阵分解，小波和压缩感知。书中还发展了重要的概率技术，包括大数定律、尾不等式、随机投影分析、机器学习的泛化保证，以及用于分析大型随机图中相变的矩方法。此外，书中还讨论了重要的结构和复杂性度量，如矩阵范数和VC维度。这本书适用于设计和分析数据算法的本科和研究生课程。

### 机器学习 Machine Learning

“机器学习”是人工智能的一个分支，研究计算机系统如何通过学习和经验改进性能。机器学习的目标是使计算机具有从数据中学习的能力，而无需显式地进行编程。机器学习的主要任务是设计和开发算法，使计算机系统能够利用数据进行学习、预测和决策。

**★【课程】Andrew NG: Machine Learning** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV16C4y197St) [Coursera](https://www.coursera.org/learn/machine-learning)
  - 吴恩达在网络上开设的机器学习课程，对新手极其友好，讲授了线性回归、逻辑回归、支持向量机、无监督学习、降维、异常检测和推荐系统等等知识，并且在编程实践中夯实自己的理解。为了大众化

**★【课程】Stanford CS229: Machine Learning** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1JE411w7Ub/) [#课程主页](http://cs229.stanford.edu/syllabus.html) - 吴恩达在斯坦福大学讲授的研究生课程，更偏重数学理论。

**【课程】Stanford CS229M: Machine Learning Theory**
[#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1fu4y1E7J1/)
  - 最新的机器学习理论。

**【书籍】机器学习** [#豆瓣](https://book.douban.com/subject/26708119/)
  - 著名的周志华“西瓜书”，机器学习的入门中文教材。在内容上尽可能涵盖机器学习基础知识的各方面，并尽量减少使用数学知识。

**【书籍】(PRML)Pattern Recognition and Machine Learning** [#豆瓣](https://book.douban.com/subject/2061116/)
  - 机器学习的经典教材，这本教材反映了机器学习领域的最新发展，并全面介绍了模式识别和机器学习领域。它面向高年级本科生、第一年的博士生，以及研究人员和从业者。不要求先前了解模式识别或机器学习概念。需要熟悉多元微积分和基本线性代数，对概率的一些了解将有所帮助，尽管不是必需的，因为该书包括对基本概率理论的自包含介绍。

**【书籍】Machine Learning, A Probabilistic Perspective** [#豆瓣](https://book.douban.com/subject/10758624/)
  - 当前网络化的电子数据洪流需要自动化的数据分析方法。机器学习提供了这些方法，开发能够自动检测数据中模式并利用这些发现的模式预测未来数据的方法。这本教材全面而自包含地介绍了机器学习领域，采用了一种统一的、概率的方法。内容既有广度又有深度，涵盖了概率、优化和线性代数等主题的必要背景知识，同时讨论了该领域的最新发展，包括条件随机场、L1正则化和深度学习等。
  - 这本书以一种非正式、易于理解的风格编写，包括最重要算法的伪代码。所有主题都配有丰富的彩色图像和来自生物学、文本处理、计算机视觉和机器人技术等应用领域的实例。与提供不同启发式方法的食谱不同，该书强调一种有原则的基于模型的方法，通常使用图形模型的语言以简洁而直观的方式指定模型。几乎所有描述的模型都已在一个名为PMTK（概率建模工具包）的MATLAB软件包中实现，可以免费在线获得。这本书适用于具有入门级大学数学背景的高年级本科生和初级研究生。

**【书籍】Interpretable Machine Learning** [#豆瓣](https://book.douban.com/subject/34948950/) [#在线阅读](https://christophm.github.io/interpretable-ml-book/)
  - 这本书介绍了如何使机器学习模型及其决策更具可解释性。在探讨可解释性概念后，你将了解到一些简单且易于解释的模型，例如决策树、决策规则和线性回归。随后的章节专注于用于解释黑盒模型的通用模型无关方法，例如特征重要性、累积局部效应，以及使用Shapley值和LIME解释个别预测。所有解释方法都将被深入讲解并进行批判性讨论。它们在底层是如何工作的？它们的优势和劣势是什么？它们的输出如何解释？这本书将使你能够选择并正确应用最适合你机器学习项目的解释方法。

### 深度学习 Deep Learning

“深度学习”是机器学习的一个分支。它专注于使用“深度神经网络”进行模式识别和特征学习。深度学习的目标是通过模拟人脑神经元网络的方式，使计算机能够从大量数据中学习和提取复杂的特征，以进行任务如分类、识别、推理等。

**【课程】CMU 10-414/714: 机器学习系统 Deep Learning Systems** [#哔哩哔哩-英文字幕](https://www.bilibili.com/video/BV1Rg4y137jH) [#油管](https://www.youtube.com/@deeplearningsystemscourse1116/videos) [#课程主页](https://dlsyscourse.org)
  - 本课程旨在让学生全面了解深度学习系统的构建过程，从现代深度学习系统的高级建模设计到自动微分工具的基本实现，再到有效算法的底层设备级实现。学生将从零开始构建一个完整的深度学习库，使用这个库来构建几种最先进的建模方法，包括卷积网络、循环网络、自注意力模型和生成模型。这将帮助学生更好地利用深度学习库的功能，并能够在需要时进行扩展和自定义。

**【课程】Stanford CS224w: Machine Learning with Graphs** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1RZ4y1c7Co) [#油管](https://www.youtube.com/watch?v=JAB_plj2rbA) [#课程主页](http://web.stanford.edu/class/cs224w/)
  - 图神经网络入门课。

**【教程】深入浅出神经网络与深度学习 Neural Networks and Deep Learning** [#豆瓣](https://book.douban.com/subject/35128111/)
  - 本书深入讲解神经网络和深度学习技术，侧重于阐释深度学习的核心概念。作者以技术原理为导向，辅以贯穿全书的MNIST手写数字识别项目示例，介绍神经网络架构、反向传播算法、过拟合解决方案、卷积神经网络等内容，以及如何利用这些知识改进深度学习项目。学完本书后，读者将能够编写Python代码解决复杂的模式识别问题。

**【书籍】Deep Learning Foundations and Concepts** [#豆瓣](https://book.douban.com/subject/36666224/)
  - 全面介绍了支撑深度学习的核心思想，旨在面向机器学习的初学者和已经在该领域有经验的人。

**【书籍】Interpretability in Deep Learning** [#Springer](https://link.springer.com/book/10.1007/978-3-031-20639-9#about-this-book)
  - 这本书是对深度学习模型可解释性的最新研究工具进行全面整理、阐述和举例讨论的著作，重点关注神经网络架构。此外，书中还包括计算机视觉、光学和与机器学习相关主题领域中应用导向文章的多个案例研究。该书可以作为深度学习可解释性的专著，涵盖最新的主题，同时也适用于研究生的教材。从事研究、开发和应用工作的科学家们可以从其系统的阐述中受益。

### 大语言模型 Large Language Model

大语言模型（简称 LLM）是指使用大量参数和深度学习技术构建的自然语言处理模型。这些模型在处理和生成自然语言文本方面表现出色，能够理解语言的上下文、语法和语义，并生成具有流畅性和逼真性的文本。

**【书籍】Understanding Large Language Models, Learning Their Underlying Concepts and Technologies** [#豆瓣](https://book.douban.com/subject/36699911/)
  - 这本书将教授你大语言模型（LLMs）的基本概念，以及与其相关的技术。该书以介绍像 ChatGPT 这样的对话型人工智能的兴起为开端，以及它们与更广泛的大语言模型谱系的关系。接着，你将学习自然语言处理（NLP）的核心概念，以及它是如何导致大语言模型的兴起的。然后，你将深入了解 transformers 以及它们的特性，如自注意力（self-attention），如何增强语言建模的能力，以及大语言模型的独特功能。该书以探讨各种大语言模型的架构和它们不断增强的能力带来的机遇，以及滥用可能带来的危险来结束。

**【书籍】Transformer, BERT, and GPT Including ChatGPT and Prompt Engineering** [#豆瓣](https://book.douban.com/subject/36677841/)
  - 本书主题广泛，涵盖了 Transformer 架构、BERT 模型以及 GPT 系列（包括GPT-3和GPT-4）的细节，其中还包括 ChatGPT。横跨十个章节，从注意机制等基础概念开始，然后涉及分词技术，探讨 Transformer 和 BERT 架构的细微之处，最后深入到与 GPT 系列最新内容（包括 ChatGPT）相关的高级主题。关键章节提供对深度学习中注意力演变和意义的见解，对 Transformer 架构的细节进行深入探讨，对 BERT 家族进行两部分探索，以及实际使用GPT-3的操作指南。最后的章节概述了 ChatGPT、GPT-4 以及使用生成式 AI 进行可视化。读者将全面了解自然语言处理模型的当前格局、它们的基础架构以及实际应用。书中附有众多代码样例和插图的配套文件。

### 强化学习 Reinforcement Learning

“强化学习”是机器学习的一个分支，专注于研究智能体（agent）如何通过与环境的交互学习行为以达到某种目标。在强化学习中，智能体通过尝试不同的行动来最大化累积的奖励，而不需要显式的监督信号或预先标记的数据。

**【课程】UC Berkeley CS285: Deep Reinforcement Learning** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV12341167kL/) [#油管](https://www.youtube.com/playlist?list=PL_iWQOsE6TfX7MaC6C3HcdOf1g337dlC9) [#课程主页](http://rail.eecs.berkeley.edu/deeprlcourse/)
  - 深度强化学习是机器学习和强化学习的交叉学科。它结合了深度学习和强化学习的技术，旨在让计算机系统通过与环境的交互学习如何做出决策以最大化累积奖励。

**【书籍】强化学习 Reinforcement Learning, An Introduction** [#豆瓣](https://book.douban.com/subject/34809689/)
  - 业内公认的一本强化学习基础理论的经典著作。它从强化学习的基本思想出发，深入浅出又严谨细致地介绍了马尔可夫决策过程、蒙特卡洛方法、时序差分方法、同轨离轨策略等强化学习的基本概念和方法，并以大量的实例帮助读者理解强化学习的问题建模过程以及核心的算法细节。

### 自然语言处理 Natural Language Processing

“自然语言处理”是一门研究如何使计算机能够理解、解释和生成自然语言的学科。自然语言是人类用于交流的语言，包括语音和文本。NLP的目标是开发算法和技术，使计算机能够处理和理解人类语言的各个方面。

**【课程】CS224n: Natural Language Processing** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV18Y411p79k/) [#课程主页](http://web.stanford.edu/class/cs224n/index.html)
  - NLP 入门课程内容覆盖了词向量、RNN、LSTM、Seq2Seq 模型、机器翻译、注意力机制、Transformer 等等 NLP 领域的核心知识点。

**【书籍】语音与语言处理 Speech and Language Processing** [#豆瓣](https://book.douban.com/subject/5373023/)
  - 本书将深入的语言分析与健壮的统计方法结合起来，新版更是涉及了大量的现代技术，将自然语言处理、计算语言学以及语音识别等内容融合在一本书中，把各种技术相互联系起来，让读者了解怎样才能最佳地利用每种技术，怎样才能将各种技术结合起来使用。

**【书籍】基于深度学习的自然语言处理 Neural Network Methods in Natural Language Processing** [#豆瓣](https://book.douban.com/subject/30236842/)
  - 本书重点介绍了神经网络模型在自然语言处理中的应用。首先介绍有监督的机器学习和前馈神经网络的基本知识，如何将机器学习方法应用在自然语言处理中，以及词向量表示（而不是符号表示）的应用。然后介绍更多专门的神经网络结构，包括一维卷积神经网络、循环神经网络、条件生成模型和基于注意力的模型。后，讨论树形网络、结构化预测以及多任务学习的前景。

### 计算机视觉 Computer Vision

计算机视觉是一门研究如何使计算机系统能够模拟和复制人类视觉系统功能的学科。该学科涉及开发算法和技术，使计算机能够理解、解释和处理图像或视频数据。计算机视觉的目标是使计算机具备类似于人类视觉系统的能力，包括对物体、场景、运动等进行感知和理解。

**【课程】UMich EECS 498-007: Deep Learning for Computer Vision** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1zg411a7Wi) [#油管](https://www.youtube.com/playlist?list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r) [#课程主页](https://web.eecs.umich.edu/~justincj/teaching/eecs498/WI2022/)
  - 推荐教材：[在线阅读](https://www.deeplearningbook.org/)

**【课程】Stanford CS231N: 计算机视觉** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1nJ411z7fe/)

**【书籍】Computer Vision: Models, Learning, and Inference** [#豆瓣](https://book.douban.com/subject/27088947/)
  - 精彩讲述了机器学习在计算机视觉方面的应用。这一现代化的计算机视觉处理方法以学习和推断概率模型为统一主题。它展示了如何利用训练数据学习观察到的图像数据与我们希望估计的世界各个方面之间的关系，比如3D结构或对象类别，并如何利用这些关系从新的图像数据中进行新的推断，以获取有关世界的信息。本书从概率和模型拟合的基础知识开始，逐步深入到读者可以实施和修改以构建有用的视觉系统的真实示例。主要面向高年级本科生和研究生，详细的方法论介绍对于计算机视觉的从业者也将是有用的。涵盖最新技术，包括图割、机器学习和多视角几何统一方法展示了解决重要计算机视觉问题的共同基础，如相机校准、人脸识别和目标跟踪。

**【书籍】Computer Vision: Algorithms and Applications** [#豆瓣](https://book.douban.com/subject/10465997/)
  - 计算机视觉的综述书籍，内容全面，探索了用于分析和解释图像的各种常用技术，描述了具有一定挑战性的视觉应用方面的成功实例，兼顾专业的医学成像和图像编辑与交织之类有趣的大众应用，以便学生能够将其应用于自己的照片和视频，从中获得成就感和乐趣。本书从科学的角度介绍基本的视觉问题，将成像过程的物理模型公式化，然后在此基础上生成对场景的逼真描述。作者还运用统计模型来分析和运用严格的工程方法来解决这些问题。
  - 中文版的翻译较好，彩色插图和参考文献在“配套书籍”中。

### 专家系统 Expert Systems

“专家系统”是人工智能领域的一个重要分支，专门研究如何构建能够模拟和复制人类专家知识与决策能力的计算机系统。

**【书籍】专家系统：原理和编程 Expert Systems: Principles and Programming** [#豆瓣](https://book.douban.com/subject/1879505/)
  - 本书是人工智能领域里的著名教科书和参考书，详细介绍专家系统的基本原理与编程技术，包括专家系统的理论知识和基于规则的应用。反映了快速发展的专家系统领域的最新趋势。共分两部分，第一部分介绍专家系统的基本理论，并对人工智能及其与专家系统的关系做了总体论述；第二部分集中介绍应用技术，包括CLIPS专家系统工具和新的面向对象语言COOL。读者将学习如何应用COOL语言通过定义规则和对象，开发一个完整的专家系统。

### 知识表示 Knowledge Representation

“知识表示”是人工智能领域的一个重要概念，涉及将现实世界中的信息以某种形式表示出来，以便计算机能够理解、存储和处理这些信息。知识表示旨在捕捉关于世界的知识，使计算机能够使用这些知识进行推理、问题解决和决策。

**【课程】MIT 6.871: Knowledge-Based Applications Systems** [#课程主页](https://ocw.mit.edu/courses/6-871-knowledge-based-applications-systems-spring-2005/)
  - 该课程涵盖了开发包含大量关于应用领域知识的程序。课程包括对相关人工智能技术的简要回顾；从多个应用领域选择的案例研究，旨在说明系统开发原则；讨论在构建系统过程中遇到的技术问题，包括知识表示、知识获取等；以及对当前和未来研究的讨论。该课程还提供了在构建专家系统方面的实际经验

**【书籍】Handbook of Knowledge Representation: Foundations of Artificial Intelligence** [#豆瓣](https://book.douban.com/subject/3138327/)
  - 关于知识表示的大部头工具书。

### 机器人学 Robotics

“机器人学”是涵盖了多个学科领域的综合学科，主要研究设计、制造、操作和使用机器人的原理、技术和应用。

**【书籍】Modern Robotics: Machanics, Planning, and Control** [#豆瓣](https://book.douban.com/subject/30460833/)
  - 这本关于机器人学的介绍提供了机器人力学、规划和控制的独特而统一的视角。非常适合自学或课程使用，因为它只需基础的大一物理学、常微分方程、线性代数和少量计算背景。
  - 本书采用了最先进的、基于螺旋理论的技术，以一种直观的几何方式捕捉机器人最显著的物理特征。每章末尾都有大量练习题，配套软件编写以加强书中的概念，还有旨在改变课堂体验的视频讲座，这是学习这一引人入胜主题的首选教材。

**【课程】UC Berkeley EE106a: Introduction to Robotics** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1TK411J7FK/) [#课程主页](https://ucb-ee106.github.io/ee106a-fa19/calendar/)

**【课程】Uc Berkeley EECS106B/206B: Robotic Manipulation and Interaction** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1M64y1s7a5) [#课程主页](https://ucb-ee106.github.io/106b-sp21site/calendar/)

**【课程】UC Berkeley CS287: Advanced Robotics** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1Lo4y187aN/) [#油管](https://www.youtube.com/watch?v=xWPViQ6LI-Q) [#课程主页](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/)

**【课程】UIUC CS498IR: AI for Robot Manipulation** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1P54y1j7YS) [#油管](https://www.youtube.com/playlist?list=PLWpZvdWm4qZzP5Edm1n0yGWqOcA22ak0a) [#课程主页](https://cs498ir2021.web.illinois.edu/schedule/)

## 软件工程相关

### 软件工程 Software Engineering

"软件工程"（Software Engineering）是一门涉及设计、开发、测试、部署和维护软件系统的学科。软件工程旨在通过系统化的方法和工具来提高软件开发过程的效率、质量和可维护性。

软件工程是一个综合性极强的学科，主要包含了以下主题：
  - 软件设计（Software Design）：着重于如何设计有效、可维护、可扩展的软件系统。这包括系统架构设计、模块化设计、接口设计等。
  - 软件开发（Software Development）：研究如何有效地实施软件设计，包括编码、测试和调试。这也涉及选择合适的编程语言和开发工具。
  - 软件测试与质量保障（Software Testing and Quality Assurance）：确保软件系统的正确性、可靠性和性能。软件测试包括单元测试、集成测试、系统测试等。
  - 软件项目管理（Software Project Management）：着重于规划、组织和监控软件项目的进度、成本和质量。这包括项目计划、团队管理、风险管理等。
  - 需求工程（Requirements Engineering）：确定和规范软件系统的需求，确保软件系统满足用户和利益相关者的期望。
  - 软件架构（Software Architecture）：设计和定义软件系统的整体结构和组件之间的关系，以满足系统的性能、可扩展性和其他需求。
  - 人机交互（Human-Computer Interaction）：研究用户与计算机系统之间的交互，以设计直观、易用的软件界面。
  - 软件维护（Software Maintenance）：着重于更新、修改和改进现有软件系统，以适应新的需求和环境。
  - 配置管理（Configuration Management）：确保软件系统的各个版本和组件能够被追踪、控制和管理，以确保系统的稳定性。
  - 软件工程伦理与法律（Software Engineering Ethics and Legal Issues）：探讨在软件开发和使用中涉及的道德和法律问题。

**【课程】UC Berkeley CS169: Software Engineering** [Bilibili]https://www.bilibili.com/video/BV1VJ41197Nq/ [#配套教材](https://github.com/PKUFlyingPig/CS169-Software-Engineering/blob/master/saasbook.pdf)
  - 这门课采用近些年流行起来的小团队快速迭代（Agile Develepment）开发模式以及利用云平台的 SAAS 服务模式。

### 网站开发 Web Development

“网站开发”课程通常涵盖设计、创建和维护网站的相关主题。这样的课程旨在为学生提供构建现代网站所需的技能，包括前端（用户界面和用户体验）和后端（服务器端）开发。

**【课程】Stanford CS142: Web Applications** [#课程主页](https://web.stanford.edu/class/cs142/index.html) [课程视频](https://web.stanford.edu/class/cs142/lectures.html)

**【资源】前段技能树**[#Github](https://github.com/JacksonTian/fks)

### 计算机安全与密码学 Computer Security and Cryptography

计算机安全课程通常涵盖以下主题：
  - 网络安全：研究网络安全的原理，包括防火墙、入侵检测系统、虚拟专用网络（VPN）等技术，以及网络协议的安全性。
  - 密码学：介绍加密算法、数字签名、密钥管理等密码学基础知识，以及如何应用密码学保护信息的安全性。
  - 身份验证与访问控制：学习用户身份验证的方法，包括单因素和多因素身份验证，以及访问控制的原理和实践。
  - 软件安全：研究应用程序和系统的安全性，包括漏洞分析、代码审计、安全开发最佳实践等。
  - 物理安全：考虑到计算机系统的物理层面，学习设备保护、机房安全等内容。
  - 安全策略与管理：研究建立和执行安全策略的方法，包括风险管理、合规性要求、安全培训等。
  - 恶意软件分析：学习分析和应对各种恶意软件，包括病毒、蠕虫、木马等。
  - 社会工程学：探讨社会工程学攻击的原理，以及如何通过教育和培训减少社会工程学威胁。

**【课程】UC Berkeley CS161: Computer Security** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1ZS4y1p7Eo/?spm_id_from=333.337.search-card.all.click) [#课程主页](https://su20.cs161.org/) [#配套教材](https://textbook.cs161.org/)

**【课程】Stanford: Cryptography I** [#Coursera](https://www.coursera.org/learn/crypto?)

**【书籍】应用密码学 : 协议、算法与C源程序 Applied Cryptography, Protocols, Algorithms, and Source Code in C** [#豆瓣](https://book.douban.com/subject/1088180/)
  - 这本密码学经典的新版为您提供了对现代密码学的全面调查。该书详细介绍了程序员和电子通信专业人员如何利用密码学——即对消息进行加密和解密的技术——以维护计算机数据的隐私。它描述了数十种密码算法，提供了如何将它们实现到密码软件中的实用建议，并展示了它们如何用于解决安全问题。涵盖了实用密码技术的最新发展，这个新版本向设计计算机应用程序、网络和存储系统的程序员展示了如何将安全性融入其软件和系统中。

**【书籍】信息安全工程 Security Engineering A Guide to Building Dependable Distributed Systems** [#豆瓣](https://book.douban.com/subject/7517408/)
  - 本书表述准确、讲解清晰，是安全工程领域的鸿篇巨著，涵盖的内容包括工程技术基础、攻击类型、专用保护机制、安全经济学和安全心理学等，适合所有对安全工程感兴趣的读者使用，指导您构建能够轻松抵御恶意攻击的可靠系统。

### 信号与系统 Signal and Systems

信号与系统是一门电子工程、通信工程、控制工程等相关专业中的基础课程。这门课程主要关注信号的生成、传输、处理和分析，以及系统对信号的响应。

**【课程】MIT 6.003: Signals And Systems** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1A7411i7Ku/) [哔哩哔哩-奥本海默亲讲](https://www.bilibili.com/video/BV1CZ4y1j7hs/) [#课程主页](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/resources/lecture-1-signals-and-systems/) 

### 凸优化 Convex Optimization

凸优化是数学和计算机科学中一个重要的领域，主要研究凸函数的最优化问题。凸函数是一类具有良好性质的数学函数，其图形上的任意两点之间的线段位于或者在函数的下方。凸函数在许多领域中都具有重要的应用，因此对凸优化的研究也变得非常重要。

**【课程】Stanford EE364A: Convex Optimization** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1aD4y1Q7aW/) [#课程主页](http://stanford.edu/class/ee364a/index.html) [配套教材](https://stanford.edu/~boyd/cvxbook/)

### 离散优化 Discrete Optimization

离散优化是指在离散的领域中寻找最优解的问题。这些问题通常涉及到在有限的选择中作出最佳决策的情境。离散优化领域包括许多不同类型的问题，其中一些常见的包括：
  - 组合优化：这涉及到在离散的对象集合中寻找最优的组合。例如，旅行商问题（TSP）要求在给定一组城市之间找到最短路径，覆盖所有城市。
  - 图论问题：诸如最短路径、最小生成树、最大流等问题都属于离散优化的范畴。这些问题通常涉及在图结构中找到最优的路径或连接。
  - 整数规划：在这类问题中，决策变量被限制为整数值。例如，0-1背包问题就是一个整数规划问题，其中物品的选择是二进制的（选或不选）。
  - 布尔满足问题（SAT）：这是一个决策问题，涉及判断给定布尔公式是否有解。SAT问题在计算机科学中具有重要的地位，因为许多其他问题可以转化为SAT问题。
  - 排课问题：这类问题涉及到合理安排资源，如时间、教室等，以满足特定的条件和约束。
  - 集合覆盖问题：在给定一些集合和它们的代价或权重的情况下，找到一组集合，使得它们的并集包含所有元素，并且总代价最小。

**【课程】MELB: Discrete Optimization** [#Coursera](https://www.coursera.org/learn/discrete-optimization)

### 软件测试 Software Test

“软件测试”是一门涉及计算机科学和软件工程领域的课程，旨在教授学生如何有效地进行软件测试和质量保障。以下是这门课程可能涉及的主题：
  - 软件测试基础：介绍软件测试的基本概念、原则和目的。学生将了解为什么软件测试对确保软件质量至关重要。
  - 测试计划和策略：学习如何制定全面的测试计划和策略，包括测试的范围、目标、资源分配和时间表。
  - 测试设计技术：探讨测试用例的设计技术，包括黑盒测试、白盒测试、灰盒测试等。学生将学会如何有效地覆盖不同方面的软件功能。
  - 自动化测试：研究如何使用自动化工具和脚本来执行测试，提高测试效率和可重复性。
  - 性能测试：学习如何评估软件系统的性能，包括响应时间、吞吐量和负载容量等。
  - 安全性测试：探讨如何测试软件系统的安全性，识别潜在的漏洞和弱点。
  - 移动应用测试：针对移动应用程序的测试技术，包括在不同设备和平台上的测试。
  - 持续集成和持续测试：学习如何将测试集成到持续集成和持续交付流程中，以确保每次代码更改都经过全面测试。
  - 缺陷跟踪和管理：学习如何跟踪和管理在测试过程中发现的缺陷，并有效地与开发团队合作解决问题。
  - 质量度量和报告：探讨如何测量软件质量、生成测试报告，以提供给项目团队和利益相关者。

**【书籍】Lessons Learned in Software Testing: A Context-Driven Approach** [#豆瓣](https://book.douban.com/subject/1984295/)
  - 这本书不仅提供了提示、技巧和要避免的常见陷阱，还能帮助您在软件开发项目的关键测试阶段迅速前进，而不需要进行大量的试错。作为每个级别的软件测试人员和开发人员的终极资源，这本指南包括：从超过30年的测试经验中获得的200多个教训；通过阅读书籍而不是费时费力地摸索，避免技巧、诀窍和常见陷阱；针对所有关键主题领域的教训，包括测试设计、测试管理、测试策略和缺陷报告等。

**【书籍】Google软件测试之道 How Google Tests Software** [#豆瓣](https://book.douban.com/subject/25742200/)
  - 描述了测试解决方案，揭示了测试架构是如何设计、实现和运行的，介绍了软件测试工程师的角色；讲解了技术测试人员应该具有的技术技能；阐述了测试工程师在产品生命周期中的职责；讲述了测试管理及在google的测试历史或在主要产品上发挥了重要作用的工程师的访谈，这对那些试图建立类似google的测试流程或团队的人受益很大。

### 用户界面设计 User Interface Design

“用户界面设计”是一门涉及计算机科学、人机交互和用户体验设计的课程，旨在教授学生如何创建用户友好、直观且有效的软件界面。

**【书籍】Designing with the Mind in Mind: Simple Guide to Understanding User Interface Design Rules** [#豆瓣](https://book.douban.com/subject/6792322/)
  - 本书语言清晰明了，将设计准则与其核心的认知学和感知科学高度统一起来，使得设计准则更容易地在具体环境中得到应用。涵盖了交互计算机系统设计的方方面面，为交互系统设计提供了支持工程方法。不仅如此，这也是一本人类行为原理的入门书。

**【书籍】设计心理学 The Design of Everyday Things** [#豆瓣](https://book.douban.com/subject/1288844/)
  - 任何设计用于人类使用的东西的人，无论是从物理对象到计算机程序到概念工具，都必须阅读这本书。对于任何必须使用其他人创建的东西的人来说，这本书同样是一次巨大的阅读体验。它可能会永远改变您体验和与物理环境互动的方式，让您认识到糟糕设计的可悲之处以及良好设计的可取之处，并提高您对事物应该如何设计的期望。

### 计算机图形学 Computer Graphics

**【课程】Stanford CS148: Introduction to Computer Graphics and Imaging** [#课程主页](https://web.stanford.edu/class/cs148/index.html)
  - 斯坦福大学计算机图形学系列课程中的入门先修课程，介绍学生创造合成计算机生成图像背后的技术概念。课程的开头侧重于使用Blender创建视觉图像，以及对底层数学概念的理解，包括三角形、法线、插值、纹理映射、凹凸映射等。然后，我们深入了解光和颜色，以及它对计算机显示器和打印机的影响。从这里，我们更详细地讨论光与环境的相互作用，并构建工程模型，如BRDF，并讨论各种简化为更基本的光照和着色模型。最后，我们讨论用于创建虚拟图像的光线追踪技术，同时将光线追踪器与现实世界的摄像机进行类比，以阐明各种概念。还讨论了抗锯齿和加速结构。最终的课程项目包括构建光线追踪器以创建视觉上引人注目的图像。主题包括：扫描线渲染；三角形；光栅化；变换；着色；三角网格；细分；Marching Cubes；纹理；光照；颜色；摄像机；显示器；色调映射；BRDF；光照方程；全局照明；辐射度；光线追踪；加速结构；采样；抗锯齿；反射；透射；景深；运动模糊；蒙特卡罗；双向光线追踪；光照图。

**【书籍】Fundamentals of Computer Graphics** [#豆瓣](https://book.douban.com/subject/26868819/)

以下是“计算机图形学与混合现实在线平台（games-cn.org）”提供的一系列关于计算机图形学和虚拟现实的课程。

**【课程】GAMES101: 现代计算机图形学入门 Overview of Computer Graphics** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1X7411F744/) [#课程主页](https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html)

**【课程】GAMES102：几何建模与处理基础** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1NA411E7Yr/) [#课程主页](http://staff.ustc.edu.cn/~lgliu/Courses/GAMES102_2020/default.html)

**【课程】GAMES103：基于物理的计算机动画入门** [哔哩哔哩-中文](https://www.bilibili.com/video/BV12Q4y1S73g/) [#课程主页](https://games-cn.org/games103/)

**【课程】GAMES106：现代图形学绘制流水线原理与实践** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1Uo4y1J7ie/) [#课程主页](https://zju-rendering.github.io/games106/)

**【课程】GAMES201：高级物理引擎实战指南** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1ZK411H7Hc/) [#课程主页](https://games-cn.org/games201/)

**【课程】GAMES202：高质量实时渲染** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1YK4y1T7yY/) [#课程主页](https://sites.cs.ucsb.edu/~lingqi/teaching/games202.html)

**【课程】GAMES203：三维重建和理解** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1pw411d7aS/) [#课程主页](https://www.cs.utexas.edu/~huangqx/Games_3D_Recons_Understanding.html)

**【课程】GAMES204：计算成像** [哔哩哔哩-中文](https://www.bilibili.com/video/BV11N4y1g7Z8/) [#课程主页](https://www.pointspread.cn/games204)

**【课程】GAMES301：曲面参数化** [哔哩哔哩-中文](https://www.bilibili.com/video/BV18T411P7hT/) [#课程主页](http://staff.ustc.edu.cn/~renjiec/GAMES301/)

**【课程】GAMES302：等几何分析** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1dM4y117PS/) [#课程主页](https://games-cn.org/games302/)

### 游戏开发 Game Development

“游戏开发”是一门涉及设计、编程和艺术等多个领域的课程，专注于培养学生创建电子游戏的技能。这门课程通常包括以下主题：
  - 游戏设计原理：介绍游戏设计的基本原理，包括游戏玩法、关卡设计、游戏物理学等。
  - 编程和开发工具：学习使用游戏开发引擎（如Unity、Unreal Engine等）和编程语言（如C#、C++）创建游戏。
  - 图形和动画：探讨游戏图形学和动画的基础知识，包括渲染、光照、粒子效果等。
  - 音频设计：学习如何集成音频元素，包括音效和音乐，以增强游戏体验。
  - 用户界面设计：设计和实现游戏中的用户界面，以便玩家与游戏进行交互。
  - 虚拟现实（VR）和增强现实（AR）：探讨在游戏中应用虚拟和增强现实技术。
  - 游戏物理学：学习如何模拟游戏中的物理现象，如重力、碰撞和运动。
  - 网络和多人游戏：研究创建支持多人在线游戏的技术和网络架构。
  - 游戏测试和质量保证：学习如何测试游戏，确保其稳定性和用户体验。
  - 商业和营销：了解游戏产业的商业模型、推广和销售策略。

以下是“计算机图形学与混合现实在线平台（games-cn.org）”提供的一系列关于计算机图形学和虚拟现实的课程。

**【课程】GAMES104：现代游戏引擎:从入门到实践** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1oU4y1R7Km/) [#课程主页](https://games104.boomingtech.com/sc/)

**【课程】GAMES105：计算机角色动画基础** [哔哩哔哩-中文](https://www.bilibili.com/video/BV1GG4y1p7fF/) [#课程主页](https://games-cn.org/games105/)

### 计算机运维 Computer Operations

“计算机运维”（简称运维、Ops）是一项关注计算机系统和网络基础设施的管理和维护工作。运维旨在确保计算机系统的正常运行、高效性能和安全性。以下是计算机运维的一些主要方面：
  - 系统监控与管理：监控计算机系统的性能、资源利用率和错误情况。运维人员使用监控工具来实时跟踪系统状态，并在需要时采取措施解决问题。
  - 服务器管理：管理和维护服务器硬件和操作系统。这包括安装、配置和更新操作系统，监控服务器健康状态，处理硬件故障等。
  - 网络管理：管理和维护计算机网络，确保网络的可用性、性能和安全性。这包括配置网络设备、监控流量、解决网络问题等。
  - 安全管理：实施安全措施，保护计算机系统和网络免受恶意攻击、病毒、恶意软件等威胁。这包括防火墙配置、漏洞管理、身份验证和访问控制等。
  - 备份和恢复：制定和执行数据备份策略，确保在发生数据丢失或系统故障时能够迅速恢复。
  - 升级和更新：定期升级软件和系统，确保系统具有最新的安全性和性能修复。
  - 容量规划：跟踪系统资源的使用情况，预测未来的需求，以便及时进行扩展或升级。
  - 故障排除：当系统或网络出现问题时，运维人员负责快速诊断和解决问题，以最小化停机时间。
  - 文档和记录：记录系统配置、更改历史和故障排除过程，以便未来的参考和培训。
  - 自动化：实施自动化工具和脚本，以简化重复性任务，提高效率，并降低错误的发生几率。

**【文档】DevOps-Guide**[#Github]https://github.com/Tikam02/DevOps-Guide
  - DevOps（开发运维）是一种将文化哲学、实践方法和工具相结合的方法，旨在提高组织交付应用程序和服务的能力，实现高速度的演进和改进产品，远远超过使用传统软件开发和基础架构管理流程的组织。这种高速度使得组织能够更好地为客户提供服务，更有效地在市场上竞争。

**【课程】Stevens CS615asa: Aspects of System Administration** [#Youtube](https://www.youtube.com/c/cs615asa) [#课程主页](https://stevens.netmeister.org/615/)

## 理论计算机科学 Theoretical Computer Science

理论计算机科学是计算机科学的一个分支，它关注于计算和信息的基本理论和数学基础。理论计算机科学探讨计算的本质、计算的限制、以及如何高效地进行计算。

理论计算机科学通常被认为分为A和B两部分（参考ICALP的CFP），A主要是计算相关的理论，包括自动机、算法复杂度等；B主要是软件相关的理论，包括数理逻辑、形式语义、类型系统等。

**★【课程】MIT 6.080: Great Ideas In Theoretical Computer Science**
 [#课程主页](https://ocw.mit.edu/courses/6-080-great-ideas-in-theoretical-computer-science-spring-2008/)
   - 该课程提供了对理论计算机科学一些核心思想的挑战性介绍。它试图呈现一种“超越计算机的计算机科学”视野：即CS作为理解宇宙和思维等复杂系统的数学工具集。从古代开始，通过欧几里得算法和其他古代的计算思维示例，课程将迅速进展到命题逻辑、图灵机和可计算性、有限自动机、哥德尔定理、高效算法和可归约性、NP完备性、P与NP问题、决策树和其他具体计算模型、随机性的威力、密码学和单向函数、计算理论学习、互动证明以及量子计算和计算的物理极限。

**【课程】MIT 6.045/18.400: Automata, Computability and Complexity**
[#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV18o4y1R748) [#油管](https://www.yuque.com/ob26eq/s?q=MIT%3A%206.045%EF%BC%8F18.400) [#课程主页](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/)
  - 该课程提供了对理论计算机科学一些核心思想的挑战性介绍。从古代开始，课程将通过有限自动机、电路和决策树、图灵机和可计算性、高效算法和可归约性、P 与 NP 问题、NP 完备性、随机性的力量、密码学和单向函数、计算学习理论以及量子计算等主题逐步发展。它研究了各种类型的计算机可以解决和无法解决的问题。它试图解释影响它们性能的计算模型之间的关键差异。

### 信息论 Information theory

“信息论”是一门研究信息传输、存储和处理的数学理论。它最初由克劳德·香农（Claude Shannon）于 20 世纪 40 年代提出，并成为通信工程和计算机科学等领域的基础理论之一。信息论主要关注信息的量化、传输、压缩和保护等问题。

**【课程】MIT 6.050J: Information theory and Entropy** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1c741177oH/) [配套教材](https://ocw.mit.edu/courses/6-050j-information-and-entropy-spring-2008/resources/mit6_050js08_textbook/)

**【课程】Cambridge: The Information Theory, Pattern Recognition, and Neural Network** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1rs411T71e) [#课程主页](http://www.inference.org.uk/mackay/itila/)
  - 配套教材为：Information Theory, Inference, and Learning Algorithms [#豆瓣](https://book.douban.com/subject/1789534/)

### 形式语言 Formal Languages

“形式语言”是一种用于描述、表示和分析符号串集合的数学和计算机科学中的抽象概念。这些语言通常用于描述字符串的结构、语法和语义，以及在计算理论、编译原理、自动机理论等领域中进行形式化描述。

**【书籍】形式语言与自动机导论 An Introduction to Formal Languages and Automata** [#豆瓣](https://book.douban.com/subject/1435126/)
  - 本书是理论计算机科学方面的优秀教材，主要介绍形式语言、自动机、可计算性和相关内容。本书特别注意定义、定理的准确性和严格性，在定理的证明中给出了直观的动机和框架，避免多余的数学细节，这有利于培养学生形式化和严格的数学推理能力，加强对问题的理解；本书通过精心设计的大量示例，生动剖析了各种定理和定义，概念清晰，深入浅出。每章后面还给出了难度不同的习题，并给出部分习题的解答，可使学生加深对基本原理的理解并增强应用能力。　　本书主要介绍形式语言、自动机、可计算性和相关内容。主要内容包括：计算理论导引、有穷自动机、正则语言与正则文法、上下文无关语言及文法、下推自动机、图灵机、形式语言和自动机的层次结构、计算复杂性等。

### 自动机理论 Automata Theory

“自动机理论”是计算机科学中研究抽象计算设备和计算问题的理论分支之一。该理论涉及形式化描述和分析计算过程。自动机是一种数学模型，用于描述抽象的计算设备。它包括有限状态自动机（Finite Automaton）、推动自动机（Pushdown Automaton）、图灵机等。这些自动机模型有助于理解和分析计算问题的可解性。

**【书籍】Introduction to Automata Theory, Languages, and Computation** [#豆瓣](https://book.douban.com/subject/2249114/)
  - 关于形式语言、自动机理论和计算复杂性的经典书籍已经更新，以简洁明了的方式呈现理论概念，并增加了实际应用的举例。

### 编程语言设计 Design of Programming Languages

**【课程】Washington CSE 505: Concepts of Programming Languages** [#课程主页](https://courses.cs.washington.edu/courses/cse505/05wi/#:~:text=Course%20Description,closest%20link%20to%20fundamental%20principles.)
  - 这门课程将研究程序设计语言设计的主要原则。课程的前半部分将重点关注函数式编程语言，因为这些语言往往与基本原则最为密切相关。我们将以 Standard ML '97 编程语言作为这些设计原则的实际示例，学习该语言并编写一些有趣的程序。我们将通过理论研究不同的 λ 演算及其形式语义来补充这种实际研究。课程的后半部分将研究面向对象的语言，包括学习和编程一种高级实用的面向对象语言（例如 Cecil），并通过 λ 演算扩展来研究面向对象语言的形式语义。
  - 配套教材为 Elements of ML Programming (ML97 edition)，Types and Programming Languages。

**【书籍】Concepts of Programming Languages** [#豆瓣](https://book.douban.com/subject/10581203/)
  - 介绍了当代编程语言的主要构造，并提供了批判性评估现有和未来编程语言所需的工具。通过作者对各种语言构造的设计问题的呈现，对这些构造在一些最常见的语言中的设计选择的审查，以及对设计替代方案的批判性比较，读者获得了理解编程语言基本概念的坚实基础。此外，Sebesta努力通过深入讨论编程语言结构、提供描述语法的形式方法以及介绍词法和语法分析方法，为读者准备进行编译器设计的学习。

**【书籍】计算机编程的概念，技术和模型 Concepts, Techniques and Models of Computer Programming** [#豆瓣](https://book.douban.com/subject/1782316/)
  - 该书侧重于具有持久价值的技术，并通过一个简单的抽象机器精确地解释它们。该书在一个统一的框架中展示了所有主要的编程范式，显示它们之间的深刻关系以及如何在何处一起使用它们。在介绍编程概念之后，该书呈现了既有名又不太为人知的计算模型（编程范式，paradigm）。每个模型都有其自己的一套技术，并基于其在实践中的有用性而被包含进来。一般模型包括声明式编程、声明式并发、消息传递并发、显式状态、面向对象编程、共享状态并发和关系式编程。专业化模型包括图形用户界面编程、分布式编程和约束编程。每个模型都基于其核心语言——一个由少量程序员重要元素组成的简单核心语言。逐步引入核心语言，逐渐添加概念，从而展示不同模型之间的深刻关系。核心语言在一个简单的抽象机器的术语中被精确定义。由于广泛的语言和编程范式可以由一小组密切相关的核心语言建模，这种方法允许程序员和学生理解编程的基本统一性。该书包含许多程序片段和练习，所有这些都可以在 Mozart 编程系统上运行，这是一个开源软件包，提供交互式增量开发环境。

**【书籍】(FFPL)Foundations for Programming Languages** [#豆瓣](https://book.douban.com/subject/1761918/)
  - 本书是为高级本科生和初入研究生阶段的学生编写的，采用一系列带类型的 λ 演算来研究顺序编程语言的公理、操作和表示语义。后面的章节致力于逐渐更复杂的类型系统。与该领域的其他文献相比，本书主要因其包含关于通用代数和代数数据类型、命令式语言和弗洛伊德-霍尔逻辑，以及有关多态性和模块、子类型和面向对象概念，以及类型推断的高级章节而脱颖而出。该书以数学为导向，但包括讨论、动机和示例，使材料对专攻软件系统、理论计算机科学或数理逻辑的学生易于理解。《编程语言基础》适用作为专业从事编程语言、软件验证或验证以及编程等领域的专业人士的参考书，包括那些从事软件模块或面向对象编程的人。

**【书籍】Practical Foundations for Programming Languages** [#豆瓣](https://book.douban.com/subject/26782198/)
  - 该文本基于类型系统和结构操作语义，发展了一套关于编程语言的全面理论。语言概念通过它们的静态和动态语义精确定义，以直观且严格的方式呈现基本工具，仅依赖基础数学。这些工具用于分析和证明语言的属性，并提供了结合和比较语言特性的框架。广泛的概念包括基本数据类型，如和积，多态和抽象类型，动态类型，动态分发，子类型和细化类型，符号和动态分类，并行性和成本语义，以及并发性和分布性。这些方法直接适用于语言实现，用于推理程序的逻辑的开发，并用于形式化验证语言属性，如类型安全。这个彻底修订的第二版在几乎每一章的末尾都包含练习，并新增了一章关于类型细化。

**【书籍】程序设计语言的形式语义 The Formal Semantics of Programming Languages** [#豆瓣](https://book.douban.com/subject/1144542/)
  - 本书是以作者在剑桥大学和 Aarhus 大学的讲义为基础编写的，是一本难得的形式语义学方面的经典著作。书中为初学程序设计语言的语义与逻辑的读者提供了必需的数学知识，介绍了支撑程序设计语言形式语义的数学理论、方法和概念，这些知识可以用于创造、形式化和证明规则，从而可以描述和推导各类程序设计语言的各种成分和性质。 本书内容十分丰富，涉及了集合论、指称语义、操作语义、公理语义、归纳原理、完备性、域论、信息系统、不确定性和并行性、不完备性和不可判定性等内容。同时，每章都包含了丰富的难度不等的练习。 

**【书籍】(TOPL)Theories of Programming Languages** [#豆瓣](https://book.douban.com/subject/4555994/)
  - 本书是关于编程语言设计、定义和实现的理论基础以及用于规定和证明程序行为的系统的广泛而严格的教程。既涵盖了命令式编程也涵盖了函数式编程，以及将这些方面整合到更一般的语言中的方法。在编程语言研究的多样性下，作者认识到了技术的统一性，提出了对该主题基本原理的综合处理。他确定了相对较少的概念，如组合语义、绑定结构、域、转换系统和推理规则，它们作为该领域的基础。本文仅假设读者具备基本的编程和数学知识，非常适合高级本科和初入研究生的编程语言理论课程，同时也适用于设计或实现计算机语言的研究人员和专业人士。

**【书籍】Foundations of Programming Languages** [#豆瓣](https://book.douban.com/subject/26698289/)
  - 本书聚焦于编程的三种范式：命令式、函数式和逻辑式编程，涵盖汇编语言编程、C++、Standard ML 和 Prolog。展示了编程语言概念不仅如何在语言中使用，还展示了这些概念如何实现。

### 量子计算 Quantum Computing

“量子计算”是一种基于量子力学原理的计算模型，利用量子比特（Qubits）而不是经典比特进行信息存储和处理。量子计算的基本原理源于量子叠加和纠缠等现象，使得量子计算机具有在某些情况下远远超过传统计算机的计算能力的潜力。

以下是量子计算的一些关键概念：
  - 量子比特（Qubit）：量子比特是量子计算中的基本单位，与经典比特不同，它可以处于多个状态的叠加态。这使得量子计算机能够处理并行计算，处理大规模问题。
  - 量子叠加（Superposition）：量子比特可以同时处于多个状态的叠加态，而非仅能处于 0 或 1 的状态。这使得量子计算机能够在一次计算中处理多个可能性。
  - 纠缠（Entanglement）：量子比特之间存在纠缠关系，一个量子比特的状态的改变会立即影响到与其纠缠的其他量子比特。这种纠缠关系在量子计算中起到关键作用。
  - 量子门（Quantum Gate）：量子计算通过应用量子门来实现操作，类似于经典计算机中的逻辑门。不同的量子门可以执行不同的量子操作。
  - 量子算法：量子计算提供了一些经典计算无法有效解决的问题的算法，例如Shor算法用于因数分解，Grover算法用于搜索。

**【课程】CMU 15-859BB: Quantum Computation and Quamtum Information** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1QL411e7se) [#油管](https://www.youtube.com/watch?v=78tSf2R1huk) [#课程主页](https://www.cs.cmu.edu/~odonnell/quantum18/)

**【书籍】Quantum Computation and Quantum Information** [#豆瓣](https://book.douban.com/subject/1443631/)
  - 这本书是对量子计算和量子信息领域的主要思想和技术的全面介绍。详细描述了快速量子算法、量子传输、量子密码学和量子纠错等令人惊奇的效应。丰富的插图和练习以更深入的方式说明和发展了其中的材料。书中的一个特点是第一部分包含的量子力学和计算机科学的教程引言，确保即使没有物理或计算机科学背景的读者也能理解这个主题。在第二部分中，作者介绍了量子计算，描述了什么是量子计算机，以及如何使用它们比传统的“经典”计算机更快地解决问题，以及量子计算机的现实世界实现。第三部分以深入的方式结束了本书，解释了如何使用量子状态执行出色的通信技巧，以及如何保护量子状态免受噪声的影响。

### 软件基础 Software Foundations

**★【书籍】软件基础 Software Foundations** [中文主页](https://coq-zh.github.io/SF-zh/)
  - 由 Benjamin C. Pierce 等人编写的一套开源教材，用于教授形式化方法、类型论和程序验证等主题。这教材旨在帮助学生理解计算机科学中的基本原理，特别是在软件开发中使用形式化方法进行证明和验证的技术。这套教材主要以 Coq 证明助手为基础，涵盖了逻辑、类型理论、编程语言和形式验证等主题。
  - 北京大学软件科学基础课程：[#课程主页](https://xiongyingfei.github.io/SF/2023/)

**【课程】UPENN CIS 500: Software Foundations** [#课程主页](https://www.seas.upenn.edu/~cis5000/cis500-f19/index.html)

### 数理逻辑 Mathematical Logic

数理逻辑是数学和哲学的交叉领域，研究形式系统和推理规则。它涉及了数学中的逻辑结构和命题关系，以及通过形式系统进行合理推理的原理。数理逻辑的应用涉及到计算机科学、哲学、语义学、数学基础等多个领域。它为理解和形式化推理提供了一种严密的框架，对于发展计算机科学和推理技术都具有重要意义。

**【书籍】Modern Mathematical Logic**
  - 这教材提供了对数学逻辑的完整且现代的介绍。作者在整个教材中使用当代的符号、约定和观点，并强调与数学的其他领域的交互。除了涵盖数学逻辑的基本概念和完备性、紧致性、不完备性的基本内容外，它还大量介绍了现代学科的基石：模型理论、集合论和可计算性理论。
  - 这本教材仅需要一定的本科数学背景，可以轻松地适应上本科或初研级别的一学期或两学期课程。

**【书籍】A First Course in Logic, An Introduction to Model Theory, Proof Theory, Computability, and Complexity** [#豆瓣](https://book.douban.com/subject/2357199/)
  - 理性思维和逻辑推理的能力构成了大多数数学、计算机科学、哲学和逻辑学学生学习的基础。本文基于作者在马里兰大学的教学笔记，面向广大受众，以一种极其清晰、深入和准确的风格涵盖了经典逻辑的基本主题，适用于上述各个领域的学生。涵盖了命题逻辑、一阶逻辑和二阶逻辑，以及证明理论、可计算性理论和模型理论，文中还包含了许多精心设计的练习题，非常适合初学者或复习课程使用。

**【书籍】Logic for applications** [#豆瓣](https://book.douban.com/subject/2176817/)
  - 这本教材首次介绍了与计算机科学中逻辑应用密切相关的数学逻辑。在其中，作者强调演绎是一种计算形式。虽然全面涵盖了逻辑的所有传统主题：语法、语义、完备性和紧致性；但本书的大部分内容涉及非传统的主题，如解析定理证明、逻辑编程和在计算机科学中变得越来越重要的非经典逻辑——模态逻辑和直觉主义逻辑。

**【书籍】面向计算机科学的数理逻辑系统建模与推理 Logic in Computer Science, Modeling and Reasoning about Systems** [#豆瓣](https://book.douban.com/subject/1277302/)
  - 本书适合作为高等院校计算机及相关专业的数理逻辑/形式化方法课程教材，涵盖了命题逻辑，谓词逻辑、模态逻辑与 Agent、二元决策图、模型检查和程序验证等内容。与传统数理逻辑教科书相比，它的主要特色就是紧紧围绕软硬件规约和验证这一主题，反映了计算机科学中数理逻辑的新发展和实际需要。第2版新增了可满足性算法，紧致性理论和 Lowenhenm-Skolem 定理，并介绍了 Alloy 语言和 Nusmv 工具。

### 公理化集合论 Axiomatic Set Theory

公理化集合论是一种将集合论的基础形式化为一组公理的方法。这种方法的目的是为集合论提供一个严格和无矛盾的理论基础。在数学的早期发展中，集合论是直觉上构建的，但这导致了一些悖论和问题，最著名的是罗素悖论。为了解决这些问题，数学家们提出了公理化集合论。

公理化集合论中，集合和它们的关系完全是由一系列公理所定义的。这些公理被设计为足够强大，以表达所有常见的集合论操作和结果，同时又足够严格，以避免悖论和不一致性。最著名的公理化集合论系统之一是策梅洛-弗兰克尔集合论（ZF），通常与选择公理（AC）一起使用，称为ZFC。

**【书籍】Set Theory: an Introduction to Independence Proofs**[#豆瓣](https://book.douban.com/subject/1437295/)
  - 许多抽象数学的分支都受到了集合论中现代独立性证明的影响。本书介绍了公理集合论中相对一致性证明，并旨在作为该学科初级研究生课程的教材。

**【书籍】Set Theory - Keneth Kunen** [#豆瓣](https://book.douban.com/subject/17797345/)
  - 这本书适用于那些了解基础数学逻辑和公理集合论，并希望更深入地了解集合论的读者。该书的主要焦点是独立性证明。其中最著名的是连续体假设（CH）的独立性；也就是说，在满足集合论公理（ZFC）的模型中，CH 为真，而在其他模型中，CH 为假。更普遍地说，在正则基数上的基数指数可以一致地取任何不与 Cantor 和 König 的经典定理相矛盾的值。

### 模型论 Model Theory

模型论是数理逻辑的一个分支，专注于研究形式语言（如数学中的逻辑语言）和它们的解释或“模型”之间的关系。在模型论中，一个“模型”是指一个数学结构（如群、环、图等），它用来解释一种形式语言中的语句和概念。这个领域探索不同的数学结构如何满足或不满足特定的逻辑语句或公理系统。

模型论的一个经典成就是哥德尔的不完备性定理，它表明在足够强的理论中（如包含基本算术的理论），存在不能被该理论证明或反驳的真实语句。模型论的工具和概念对于理解和处理这些深刻的数学和哲学问题至关重要。

通过这些公理，公理化集合论为现代数学提供了一个坚实和一致的基础，特别是对于无穷数学和数理逻辑领域。

**【书籍】Model Theory - Chen Chung Chang，H.J.Keisler**[#豆瓣](https://book.douban.com/subject/1437298/)
  - 这是逻辑模型理论中的第一本也是最成功的教科书。每一章介绍一种独特的方法，并讨论具体的应用。构建模型的基本方法包括常数、基本链、斯科伦函数、不可区分元素、超积和特殊模型。最后几章介绍了结合多种方法的更高级主题。这本经典著作涵盖了一阶模型理论的大部分方面及其在代数和集合理论中的许多应用。

**【书籍】(GTM217)Model Theory: an Introduction - David Marker**[#豆瓣](https://book.douban.com/subject/2251700/)
  - 本书是对模型理论的现代介绍，全文强调其在代数中的应用。书的前半部分包括关于模型构建技术、类型空间、主模型、饱和模型、可数模型以及不可区分元素及其应用的经典材料。作者还介绍了稳定性理论，从莫利的分类定理开始，重点讨论ω-稳定理论。这本书的一个重要特点是包括了其他入门文本中没有涵盖的重要主题章节，如ω-稳定群和强最小集的几何学。作者随后展示了这些成分如何在 Hrushovski 关于丢番图几何的应用中使用。

### 证明论 Proof Theory

证明论是数理逻辑的一个分支，专注于数学证明的形式和性质。证明论的核心目标是理解和分析数学证明的结构，以及通过形式化的方法来研究证明的过程和结果。证明论的研究有助于深化我们对数学推理本质的理解。

**【书籍】Proof Theory - Takeuti**[#豆瓣](https://book.douban.com/subject/11238104/)
  - 本书探讨了证明理论在逻辑以及数学的其他领域中的应用。适合数学高年级本科生和研究生的阅读。本书分为三个部分，首先探讨了一阶系统，包括一种涉及 Gentzen 的切割消除定理以及关于哥德尔不完备定理和 Gentzen 一致性证明的自然数理论的处理。第二部分考虑了二阶和有限阶系统，涵盖了简单类型理论和无穷逻辑。最后几章讨论了一致性问题，包括一致性证明及其应用。

### 递归论/计算理论 Recursive Theory/Computability Theory

“递归论”，也称为“计算理论”，是数学和理论计算机科学中的一个分支，专注于研究可计算函数以及可计算性和不可计算性的概念。这个领域探索哪些数学问题是可解的，即存在一个算法可以在有限的时间内找到答案，以及哪些问题是不可解的，即不存在这样的算法。

一些问题可能是永远都无法被解决的，比如“停机问题（Halting Problem）”，即计算机是否可以实现一个程序，用来检验任意程序是否会在某一时点停止运行、或者永远继续运行。很多问题是理论上可计算的，但是在实际情况上，可能需要近乎无限的内存和无限的步骤（也就是时间，甚至可以超过宇宙的年龄，138亿年或者267亿年）。

**【课程】MIT 18.404J: Theory of Computation** [#哔哩哔哩-中英字幕](https://www.bilibili.com/video/BV1vF411i7rk) [#课程主页](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/)

**【书籍】计算理论导引 Introduction to the Theory of Computation** [#豆瓣](https://book.douban.com/subject/1852515/)
  - 使用计算机科学用数学方法进行定理和证明设计。

**【书籍】Computability: an Introduction to Recursive Function Theory**[#豆瓣](https://book.douban.com/subject/1437118/)
  - 计算机在原理上能够做什么？它们有哪些固有的理论限制？这些是计算机科学家必须解决的问题。使这些问题能够得到回答的理论框架在过去的五十年里已经从可计算函数的概念中发展而来：直观地说，可计算函数的值可以以有效或自动的方式计算。本书是对可计算性理论（在数学家传统上称之为递归理论）的介绍。Cutland博士从数学上对可计算函数的特征开始，使用一个简单的理想化计算机（寄存器机器）；在与其他特征的比较后，他发展了数学理论，包括对不可计算性和不可判定性的全面讨论，以及递归和递归可枚举集的理论。后面的章节介绍了更高级的主题，如哥德尔的不完备性定理、不可解度的程度、递归定理和计算复杂性理论。因此，可计算性是数学的一个分支，对计算机科学家和哲学家也很重要。

**【书籍】Recursively Enumerable Sets and Degrees: a Study of Computable Functions and Computably Generated Sets - Robert I. Soare**[#豆瓣](https://book.douban.com/subject/1920723/)
  - 第一部分包括对计算理论和递归函数理论的介绍，包括可计算函数、图灵机、部分递归函数、递归可枚举集、Kleene递归定理等的定义。第二部分是对递归可枚举集及其程度的全面研究。

**【书籍】Recursion Theory for Metamathematics** [#豆瓣](https://book.douban.com/subject/3911358/)
  - 这部作品是作者的《哥德尔不完备定理》的续篇，尽管任何熟悉皮亚诺算术系统和哥德尔不完备定理的人都可以独立阅读。这本书主要涉及与不完备性、不可判定性以及相关主题的元数学应用相关的递归理论方面。它既是该理论的入门，也是该领域新成果的介绍。

### 计算复杂度 Computational Complexity

“计算复杂度”理论关注的是如何度量和分类问题的难度，以及寻找高效算法的可能性。计算复杂度理论的研究对于评估算法效率、了解问题可解性、发展计算机科学的理论基础都具有重要的意义。在实际应用中，理解问题的复杂度有助于设计更高效的算法，解决实际工程和科学问题。

**【书籍】Computational Complexity, A Modern Approach** [#豆瓣](https://book.douban.com/subject/3895531/)
  - 这本研究生入门教材描述了计算复杂性理论的最新成果和经典结果。除了数学素养之外，几乎不需要任何背景知识，该书可供对复杂性感兴趣的任何人，包括物理学家、数学家和其他科学家，作为自学的参考书，也可作为各种课程和研讨会的教材。书中包含了300多个练习题，并附有选定的提示集。

**【书籍】Computers And Intractability, A Guide To The Theory Of Np Completeness** [#豆瓣](https://book.douban.com/subject/2330824/)
  - 这本书的重点是教导读者如何识别、处理和理解 NP 完全问题的本质；本书涵盖了诸如如何证明给定问题是NP完全问题以及如何处理 NP 完全问题等主题。此外，本书还包含了一个包含300多个问题的列表，其中大多数已知是 NP 完全问题，附有评论和参考资料。

**【书籍】The Nature of Computation** [#豆瓣](https://book.douban.com/subject/4394513/)
  - 计算复杂性是现代数学中最美丽的领域之一，它越来越与其他科学领域相关，涵盖物理学到生物学。但这种美丽经常被不必要的形式主义层层覆盖，而令人兴奋的最新成果，如交互式证明、相变和量子计算，通常被认为对于典型的学生来说太高级。本书通过以清晰和愉快的方式解释理论计算机科学的深刻思想，弥合了这些差距，使它们对非计算机科学家和那些最终想要从新的角度欣赏自己领域的计算机科学家变得可访问。
  - 作者首先对 P vs. NP 问题进行了明晰而富有趣味的解释，解释了为什么它如此基础，以及为什么如此难以解决。然后，他们引导读者穿越迷宫和游戏的复杂性；理论和实践中的优化；随机算法、交互式证明和伪随机性；马尔可夫链和相变；以及量子计算的外围领域。

### 类型论 Type Theory

类型论是一种数学和计算机科学中的形式系统，用于研究和描述计算的性质。它起源于数理逻辑和哲学，目前在计算机科学、编程语言设计和数学基础等领域得到广泛应用。类型论的主要目标是通过引入类型来帮助避免程序错误，并提供一种严格的数学基础，以理解和证明计算过程。“类型”是关于值的分类。每个值都有一个关联的类型，而类型定义了值可以具有的性质和行为。通过强制类型，类型论有助于捕捉和防止一些常见的编程错误。 类型论在程序验证领域中得到广泛应用。通过使用类型系统，可以在编译时捕获一些常见的编程错误，提高代码的可靠性。

**【书籍】(TAPL)类型和程序设计语言 Types and Programming Languages** [#豆瓣](https://book.douban.com/subject/1761910/)
  - 类型系统是一种语法方法，通过根据程序短语计算的值的种类对其进行分类，自动检查某些错误行为的缺失。对类型系统的研究，以及从类型理论角度研究编程语言，对软件工程、语言设计、高性能编译器和安全性具有重要应用。本文综合介绍了计算机科学中的类型系统以及编程语言的基本理论。方法是实用和操作性的；每个新概念都以编程示例为动机，更理论的部分是基于实现的需求驱动的。每一章都附带了大量的练习和解决方案，以及一个可通过网络访问的运行实现。章节之间的依赖关系明确标识，允许读者选择通过材料的不同路径。核心主题包括无类型的lambda演算、简单类型系统、类型重构、通用和存在多态性、子类型、有界量化、递归类型、种类和类型运算符。扩展案例研究开发了多种建模面向对象语言特性的方法。

**【书籍】Advanced Topics in Types and Programming Languages** [#豆瓣](https://book.douban.com/subject/1761911/)
  - 本书提供了对该领域关键思想的易于理解的介绍，由每个主题的专家提供了贡献。涵盖的主题包括精确的类型分析，将简单类型系统扩展以更好地掌握系统的运行时行为；用于低级语言的类型系统；将类型应用于计算机程序推理的应用；类型理论作为设计复杂模块系统的框架；以及ML风格类型推断的高级技术。

**【书籍】(TTFP)Type Theory and Functional Programming** [#豆瓣](https://book.douban.com/subject/1761940/)
  - 本书探讨了 Martin-Lof 的构造型理论在计算机编程中的作用。本书的主要重点是如何成功地将这一理论应用于实践中。导论部分提供了逻辑、λ 演算和构造数学方面的必要背景知识，并包括练习和章节摘要以加强理解。

**【书籍】(HoTT)Homotopy Type Theory: Univalent Foundations of Mathematics** [#豆瓣](https://book.douban.com/subject/25827125/)
  - 同伦类型论是数学的一个新分支，以一种令人惊讶的方式将几个不同领域的方面结合在一起。它基于最近发现的同伦理论与类型理论之间的联系。它涉及看似相距甚远的主题，如球面的同伦群、类型检查的算法和弱∞-群体的定义。同伦类型理论提供了数学的新的“等价”基础，其中Voevodsky的等价公理和高阶归纳类型扮演着核心角色。本书旨在首次系统地阐述等价基础的基本原理，并提供这种新型推理方式的示例，但不要求读者了解或学习任何形式的逻辑，也不要求使用任何计算机证明助手。

### 范畴论 Category Theory

范畴论（Category Theory）是数学中的一个抽象代数分支，研究各种数学结构和概念之间的普遍性质和关系。它以范畴为基本概念，通过研究范畴之间的映射（函子）和对象之间的映射（态射）来建立抽象的数学理论。以下是一些基本概念：
  - 范畴：范畴是一个包含对象和态射（箭头）的数学结构，满足一些基本公理。范畴中的对象可以是任何数学结构，而态射表示对象之间的映射。
  - 态射和复合：范畴中的态射是对象之间的映射，而复合是态射的组合。复合必须满足结合律。
  - 函子：函子是范畴之间的映射，它将一个范畴中的对象和态射映射到另一个范畴中，同时保持态射的复合结构。

Haskell 与范畴论有深刻的关系。范畴论中的概念，如函子、单子（monad）、自然变换等，直接影响了Haskell中的一些核心概念。

**【书籍】Basic Category Theory for Computer Scientists** [#豆瓣](https://book.douban.com/subject/1823108/)
  - 范畴论是纯数学中的一个分支，正在成为理论计算机科学中越来越重要的工具，特别是在编程语言语义学、域论和并发性方面，它已经是标准的交流语言。假设你具备最基本的数学准备，《计算机科学家的基础范畴论》提供了范畴论基本构造和术语的简明介绍，包括极限、函子、自然变换、伴随和笛卡尔封闭范畴。四个案例研究阐述了范畴论在编程语言设计、语义学以及递归域方程解决中的应用。简短的文献综述提供了在更高级文本中深入学习的建议。

**【书籍】(GTM5)Categories for Working Mathematician - Saunders Mac Lan**[#豆瓣](https://book.douban.com/subject/1823110/)
  - 这本书提供了一系列在各个领域中都有用的一般性思想。从基础开始，本书阐明了范畴、函子、自然变换和对偶的概念。然后转向伴随函子，它提供了对通用构造的描述、通过态射集表示函子的分析，以及操纵直极限和逆极限的手段。这些范畴概念在其余章节中得到广泛阐述，包括对伴随函子的基本存在定理的许多应用。代数系统的范畴是从某些类似伴随的数据构造出来的，并由贝克定理进行表征。在考虑了各种应用之后，本书继续讨论Kan扩张的构造和利用。

### 程序验证 Program Verification

“程序验证”是一种使用数学和逻辑方法来确保计算机程序满足其规约和要求的过程。这一过程强调使用形式化方法，旨在验证程序在所有可能的输入条件下都能够产生正确的输出，并且不会出现错误或异常行为。这涉及到定义性质、编写证明、进行形式化推理等。

**【书籍】The Foundations of Program Verification** [#豆瓣](https://book.douban.com/subject/4904493/)
  - 本书提供了若干程序验证技术的精确数学基础。它集中讨论了那些现已成为经典的验证方法，如Floyd的归纳断言方法、Hoare的公理方法和Scott的不动点归纳。本书的目标是在简单的环境中呈现这些不同的验证方法，并解释它们的数学背景，特别是对不同方法的正确性和完整性问题进行了详细讨论，并包括了许多有用的示例。

### 模型检查 Model Checking

模型检查（Model Checking）是计算机科学中的一种技术，用于自动化地验证有限状态系统（如硬件设计或计算机程序）是否满足给定的规范或属性。换句话说，模型检查是一种检查系统模型是否符合一组特定要求的方法。这种技术广泛用于软件和硬件的验证与调试，例如并发系统、通信协议、硬件设计等。

在模型检查中，系统的行为被建模为状态转换系统，其中系统的所有可能状态和状态之间的转换关系都被明确表示。性质通常以逻辑或时序逻辑的形式给出，例如是否存在某种状态序列满足某种性质。

**【书籍】模型检验原理 Principle of Model Checking** [Amazon](https://www.amazon.com/Principles-Model-Checking-MIT-Press/dp/026202649X/ref=sr_1_1?keywords=Principle+of+Model+Checking&qid=1555162555&s=books&sr=1-1)
  - 这本书是关于模型检查基础的全面介绍，这是一种用于在硬件和软件中查找缺陷的全自动技术，涵盖了大量示例以及实际和理论练习。该书首先介绍了建模并发和通信系统的基本原理，引入了不同类别的性质（包括安全性和活性），提出了公平性的概念，并提供了用于这些性质的基于自动机的算法。它引入了时态逻辑 LTL 和 CTL，对它们进行比较，并涵盖了用于验证这些逻辑的算法，讨论了实时系统以及受随机现象影响的系统。单独的章节处理了诸如抽象和符号操作等提高效率的技术。该书包含了大量示例（其中大多数贯穿了多个章节），以及一套完整的基础结果并附有详细的证明。

### 自动化定理证明 Automated Thereom Proving

自动化定理证明（简称 ATP）是计算机科学和数理逻辑领域的一个重要分支，涉及开发计算机程序（称为定理证明器）来自动化地证明数学定理。这种技术的目标是减少或消除人工证明数学定理的需要，同时提供高度的准确性和效率。

**【书籍】(Coq'Art)交互式定理证明与程序开发 Interactive Theorem Proving and Program Development Coq'Art, The Calculus of Inductive Constructions** [#豆瓣](https://book.douban.com/subject/4191510/)
  - Coq 是一个交互式证明助手，用于开发数学理论和正式认证的软件。它基于一种称为归纳构造演算（calculus of inductive constructions）的理论，这是类型理论的一种变体。允许用户定义数学概念、表述定理以及构造用来证明这些定理的逻辑推导。Coq 在数学和计算机科学领域都非常有用，特别是在那些要求高度精确和正确性保证的领域。
  - Coq 的核心是构建在类型理论和构造主义逻辑之上的，它使用一种名为“Gallina”的语言来表述数学命题和证明。Coq 的证明是构造性的，这意味着每个证明实际上是构建一个证明对象的过程，这个对象证实了所声明的定理。这种方法不仅确保了证明的正确性，而且提供了关于证明本身的深入理解。

**【书籍】(CPDT)Certified Programming with Dependent Types: A Pragmatic Introduction to the Coq Proof Assistant** [#豆瓣](https://book.douban.com/subject/26171484/)
  - 机械化程序验证技术可以在计算机科学的许多研究项目中发挥支持作用，与之相关的形式证明检查工具正在数学和工程领域得到越来越多的应用。本书介绍了Coq软件，用于编写和验证数学证明。全书始终注重实际工程应用，强调将帮助用户构建、理解和维护大型Coq开发，并最小化随时间变化的代码成本的技巧。书中详细讨论了两个主题，很少在其他地方讨论，分别是有效的依赖类型编程（充分利用Coq系统核心功能的特性）和领域特定证明策略的构建。几乎每个涵盖的主题都与交互式计算机定理证明有关，不仅适用于程序验证，还通过许多不同形式的正式化中应用的已验证程序示例来展示。本书开发了一种独特的自动化证明风格，并在整个过程中应用它

**【书籍】Verified Functional Programming in Agda** [#豆瓣](https://book.douban.com/subject/26798747/)
  - 第一本系统阐述了Agda中的外部和内部验证的书籍，适用于计算机科学本科生。书中不需要对函数式编程或计算机检查的证明有任何了解。书籍从通过熟悉的例子如布尔值、自然数和列表介绍函数式编程以及外部验证的技术开始。通过向量、二叉搜索树和Braun树的例子来考虑内部验证。书中还包括关于类型级计算、关于终止的明确推理以及通过评估进行归一化的高级内容。书籍还包括了一个关于Huffman编码和解码的中等规模案例研究。

**【资源】Mathematical Components** [#主页](https://math-comp.github.io/)
  - 使用Coq证明助手开发的正式化数学库。这个项目的根源可以追溯到对四色定理的正式证明。它已被用于大规模的正式化项目，包括对奇数阶（费特-汤普森）定理的正式证明。

### 程序分析 Program Analysis

“程序分析”是计算机科学中的一个领域，主要关注对计算机程序进行静态和动态分析的方法。这个领域涵盖了多种技术和工具，用于理解、优化和验证程序的行为。程序分析可以分为静态分析和动态分析两大类：
  - 静态分析：在程序运行之前，通过检查源代码或中间表示来分析程序。静态分析的目标包括发现潜在的错误、评估程序的性能、生成文档以及理解程序的行为。常见的静态分析技术包括抽象解释、符号执行、数据流分析等。
  - 动态分析：在程序运行时，通过监视程序的实际执行来获取信息。动态分析可以包括性能分析、内存泄漏检测、安全漏洞检测等。它通常涉及使用工具或代理来观察程序的执行轨迹和行为。

**【课程】MIT 6.820: Fundamentals Of Program Analysis** [#课程主页](https://ocw.mit.edu/courses/6-820-fundamentals-of-program-analysis-fall-2015/)
  - 这门课程全面介绍了程序分析领域。它涵盖了程序分析的一些主要形式，包括类型检查、抽象解释和模型检测。对于每一种方法，课程既涵盖了基础理论，也包括了现代技术和应用。

**【书籍】Principles of Program Analysis** [#豆瓣](Principles of Program Analysis)
  - 程序分析利用静态技术来计算关于程序动态行为的可靠信息。应用领域包括编译器（用于代码改进）、软件验证（用于检测错误）以及数据表示之间的转换（用于解决诸如Y2K等问题）。这本书独特之处在于提供了对程序分析的四种主要方法的概述：数据流分析、基于约束的分析、抽象解释和类型与效果系统。书中的呈现展示了这些方法之间广泛的相似之处，帮助读者选择最适合他们使用的方法。

### 形式化方法 Formal Method

“形式化方法”是一种通过使用数学和形式化语言来进行系统设计、规约、验证和验证的软件和系统工程方法。这些方法旨在提高系统的可靠性、安全性和正确性，并在设计和开发的不同阶段中使用形式规约来明确定义系统的行为。

**【书籍】Concise Guide to Formal Methods** [#豆瓣](https://book.douban.com/subject/30481054/)
  - 这本宝贵的教材/参考书提供了对形式方法基础的易读指南，突出了形式方法在计算领域各种各样的应用，介绍了软件工程、软件可靠性和可信性、形式方法和离散数学的关键概念。

**【书籍】Formal Methods: An Appetizer** [#豆瓣](https://book.douban.com/subject/35415384/)
  - 本书是关于形式方法的使用的介绍，涵盖了从关键编程构造的语义到程序分析和验证技术。我们使用程序图作为表示程序控制结构的机制，以在通用性（应能够容纳许多编程构造并支持许多分析技术）和概念复杂性（不应要求学生能够操作证明树等）之间取得平衡。


### Lambda 演算 Lambda-Calculus

“Lambda 演算”是一种数学形式化方法，用于描述计算和函数抽象。它是一种极简抽象模型，由数学家阿隆佐·邱奇（Alonzo Church）于1930年代提出。Lambda 演算对于计算理论的发展和理解函数式编程语言的基础具有重要影响。

Lambda演算的核心概念是函数抽象和应用。它使用一个简单的符号 λ（lambda）来表示函数的定义，以及一个点（.）来分隔参数和函数体。Lambda演算的基本语法如下：
   1. 变量：用单个字母表示，例如 x、y、z。
   2. 抽象：使用 λ 符号表示，例如 λx.x 表示一个以 x 为参数的函数，返回 x。
   3. 应用：使用空格表示，例如 (λx.x) y 表示将参数 y 应用于函数 λx. x。

Lambda 演算的一个关键特征是匿名函数（anonymous functions）。函数没有名称，而是通过参数和函数体来定义。Lambda 演算是图灵完备的，这意味着它能够表示任何可计算的函数。Lambda 演算在计算理论、编程语言设计和函数式编程方面有广泛的应用。它为理解函数式编程语言（如 Lisp、Haskell、Scheme）的基本概念提供了理论基础。Lambda 演算还在形式语言、编译原理和计算复杂性等领域中有重要的应用。Lambda 演算的形式化定义允许研究计算过程的本质，而不涉及具体的计算机结构。这种抽象性使得 Lambda 演算成为理论计算机科学和计算理论的关键工具。

**【书籍】Lambda-Calculus and Combinators** [#豆瓣](https://book.douban.com/subject/4323391/)
  - 书中讨论了组合逻辑和λ演算的语法和基本属性，然后介绍了类型理论。系统的有类型和无类型版本以及它们之间的差异都有涵盖。解释了λ演算模型，这些模型在编程语言的语义中起到了重要作用。本书的处理尽量非技术化，强调主要思想，并通过示例进行说明。

**【书籍】The Lambda Calculus, Its Syntax and Semantics** [#豆瓣](https://book.douban.com/subject/20142135/)
  - 本书主要讨论了 Lambda 演算（主要是无类型版本），由一组表达式组成，称为λ项，以及如何重写和识别这些表达式的方法。在部分“转换”、“规约”、“理论”和“模型”中，观点分别是“代数”的、计算的，带有更多（“协同归纳”）的标识，最后是集合论的。Lambda 项是由变量构建的，使用应用和抽象。将一个项F应用于M的意图是F是一个函数，M是它的参数，FM是应用的结果。这仅仅是意图：要实际获得结果，必须根据规约规则重写表达式FM。抽象提供了一种根据应用它们的效果创建函数的方法。这个理论的强大之处在于，计算，无论是终止还是无限的，都可以用 lambda 项以一个“舒适”的抽象水平来表达。

**【书籍】Lambda-calculus, Combinators and Functional Programming** [#豆瓣](https://book.douban.com/subject/3928453/)
  - 这本书最初于1988年出版，介绍了 lambda 演算和组合子，而不深入探讨它们理论的数学细节。这里将 lambda 演算视为一种函数语言，并清楚地展示了它与计算机科学的相关性。该书的主要目的是为计算机科学学生和研究人员提供关于 lambda 演算和组合子的坚实背景，并展示这些理论在函数式编程中的适用性。所提供的材料是自包含的。它可以用作函数式编程课程的主要教材。它也可以用作计算机语言结构和实现、计算理论或编程语言语义课程的辅助教材。

### 图论 Graph Theory

“图论”是数学的一个分支，研究图（Graph）的结构、性质和相互关系。图是由节点（顶点）和连接这些节点的边组成的数学模型，它是描述事物之间关系的一种抽象工具。

**【书籍】Introduction to Graph Theory** [#豆瓣](https://book.douban.com/subject/30481054/)
  - 这本书是一次激发数学兴趣的纯数学之旅，面向那些“在数学上受到创伤”的人，但对于数学爱好者和认真的数学家来说也非常有趣。本书将读者从简单的图形引导到平面图、欧拉公式、柏拉图图形、着色、图的亏格、欧拉路径、哈密顿路径等内容。

### 计算几何 Computational Geometry

“计算几何”是计算机科学和数学的一个分支，主要研究解决几何问题的算法和数据结构。这些问题通常涉及对几何对象（如点、线、多边形、圆等）进行操作，并解决与这些对象相关的各种计算挑战。主要内容包括：
  - 几何算法：设计用于解决几何问题的高效算法，如计算凸包、寻找最近邻点、求交点等。
  - 数据结构：开发适用于几何对象的数据结构，以支持高效的查询和操作。例如，使用平衡树、四叉树、Delaunay 三角剖分等数据结构。
  - 空间分析：研究在二维和三维空间中进行几何计算的技术，包括点、线和多边形的表示与操作。
  - 凸包：计算点集的凸包，即包围所有点的最小凸多边形。
  - 最近邻搜索：寻找空间中给定点的最近邻点。
  - 三角剖分：将给定点集进行三角剖分，常用于地理信息系统（GIS）和有限元分析等领域
  - 交点计算：计算几何对象（如线、多边形）之间的交点。
  - 形状匹配：比较两个几何形状，以确定它们的相似性或匹配程度。

### 布尔代数 Boolean Algebra

“布尔代数”是一种代数结构，它在逻辑和计算中具有重要的应用。它基于两个逻辑值（真和假），通常用 0 和 1 表示，以及逻辑运算（与、或、非）。

布尔代数在计算机科学、电子工程、逻辑设计等领域中被广泛应用。它为逻辑电路的设计和分析提供了理论基础，同时也是计算机程序设计中条件语句和逻辑运算的基础。

**【书籍】Introduction to Boolean Algebras** [#豆瓣](https://book.douban.com/subject/3205901/)
  - 这本书是作者在布尔代数领域的讲座的非正式、系统性的呈现，面向高级本科生和初级研究生。以大胆而清新的风格，本书涵盖了布尔代数的内容，发展了一些引人入胜的思想，并提供了难得的见解。

### 布尔函数 Boolean Functions

布尔函数是一类特殊的数学函数，其定义域和值域都是布尔集合（{0, 1}）。这类函数在计算机科学、电子工程和逻辑设计等领域中具有重要的应用。一个布尔函数可以表示为将布尔值映射到另一个布尔值的规则。在布尔函数中，常见的逻辑运算包括 AND、OR、NOT 等，而布尔代数被广泛用于描述和分析这些函数。

在计算机科学中，布尔函数被应用在编码理论、数据结构和算法设计等方面。

**【课程】CMU 15-859S / 21-801A: Analysis of Boolean Functions** [#哔哩哔哩-无字幕](https://www.bilibili.com/video/BV1364y1y71X/) [#课程主页](https://www.cs.cmu.edu/~odonnell/aobf12/)

**【书籍】Boolean Functions Theory, Algorithms, and Applications** [#豆瓣](https://book.douban.com/subject/33301338/)
  - 这本专著由该领域的杰出专家撰写，提供了布尔函数理论的结构、算法和应用方面的首个全面而统一的阐述。该书侧重于布尔函数的代数表示，特别是析取范式和合取范式的表示。该框架探讨了该理论的基本元素（布尔方程和可满足性问题、主析取范式和相关的简短表示、对偶化），深入研究了布尔函数的特殊类别，以及布尔函数概念的两个富有成果的推广（部分定义函数和伪布尔函数）。

### 决策过程 Decision Procedure

“决策过程”是一种算法或系统，用于判断某个逻辑理论中的公式是否为可满足的（Satisfiable）或成立的（Valid）。这样的算法通常被设计用来解决特定逻辑理论中的问题，并且在给定输入的情况下，能够准确、自动地确定公式的真假。

**【书籍】Decision Procedure: An Algorithmic Point of View** [#豆瓣](https://book.douban.com/subject/4407949/) [在线书籍](https://www.decision-procedures.org/)
  - 决策过程是一种算法，对于给定的决策问题，能够以正确的是/否答案终止。在这里，作者聚焦于那些足够表达实际问题但仍可判定的理论。具体而言，该书集中讨论了在自动验证和推理、定理证明、编译器优化和运筹学中常用的一阶理论的决策过程。书中描述的技术涉及到图论和逻辑等领域，并在工业中得到广泛应用。
  - 系统介绍了 SAT（可满足性问题）、SMT（理论可满足性问题）和DPLL(T)框架的基本术语。然后，在各个章节中，他们研究了以下理论的决策过程：相等性和未解释函数、线性算术、位向量、数组、指针逻辑以及量化公式。

## 更多网络资源

### 技术教程篇

**自学计算机科学 TeachYourselfCS**[#主页](https://teachyourselfcs.com/)[#中文版](https://github.com/izackwu/TeachYourselfCS-CN/blob/master/TeachYourselfCS-CN.md)
  - 主次分明的自学指南，提供了许多很棒的观点，（由于写得太好了）已摘录在附录部分。

**【资源】小林 x 图解计算机基础** [#主页](https://github.com/xiaolincoder/CS-Base)

**Project Based Learning**[#主页](https://github.com/practical-tutorials/project-based-learning)
  - 利用一个个编程项目学习计算机科学。初学软件开发者可以从零开始学习如何构建应用程序。这些教程按照不同的主要编程语言进行划分。教程可能涉及多种技术和编程语言。

**Open Source Society University**[#主页](https://github.com/open-source-society/computer-science)
  - 自学计算机科学的学习路径和资源。

**UC Berkeley Course Guide【资源】** [#主页](https://hkn.eecs.berkeley.edu/courseguides)

### 书单论文篇

**Papers We Love**[#主页](https://paperswelove.org/)
  - 计算机科学论文集合。

**Lambda the Ultimate**[#主页](http://lambda-the-ultimate.org/)

**Resources for Programming Language Research**[#主页](http://www.cs.cmu.edu/afs/cs.cmu.edu/user/mleone/web/language-research.html)

**Oleg's FTP**[#主页](http://okmij.org/ftp/)

**Classic Papers in Programming Languages and Logic**[#主页](http://www.cs.cmu.edu/~crary/819-f09/)

**Readscheme.org - Functional Programming Resources**[#主页](http://readscheme.org/)

**Cite Seer X - Search across over 10,000,000 documents, journals, and papers**[#主页](http://citeseerx.ist.psu.edu/)

**免费的编程中文书籍索引**[#主页](https://github.com/justjavac/free-programming-books-zh_CN)

**免费编程书籍** [#主页](https://ebookfoundation.github.io/free-programming-books/) [#Github](https://github.com/EbookFoundation/free-programming-books)

### 练习项目篇

**Code Crafter - Build-Your-Own-X**[#主页](https://app.codecrafters.io/) [#主页](https://github.com/orgs/codecrafters-io/repositories) [#主页](https://github.com/codecrafters-io/build-your-own-x)

**500 Lines or Less**[#主页](https://github.com/aosabook/500lines) 
  - 高质量的代码总数小于 500 行的小项目

### 资源集合篇

**Awesome**[#主页](https://github.com/sindresorhus/awesome)

**HelloGitHub**[#主页](https://hellogithub.com/) [#Github](https://github.com/521xueweihan/HelloGitHub)
  - Github 有趣开源项目的汇总。内容包括：有趣、入门级的开源项目、开源书籍、实战项目、企业级项目等。

**Open Source Society University**[#主页](https://github.com/ossu/computer-science?tab=readme-ov-file#core-cs)
  - 免费自学计算机科学的完整教程。

**MIT Programming & Software Engineering Course List**[#主页](https://student.mit.edu/catalog/m6a.html)

## 本文参考资料

本文参考了多个来源的资料和讯息，包括知乎、哔哩哔哩、Youtube、Github、csdiy.wiki、games-cn.org 等网站，参考了 TeachYourselfCS、Awesome-List 等项目，由于时间有限，并未一一标注出处。并且，本文部分内容和翻译由 ChatGPT 3.5 生成、翻译。

## 附录 - 来自世界的睿智

### 自学计算机科学 TeachYourselfCS（中文版）

> 摘录自：https://github.com/izackwu/TeachYourselfCS-CN/blob/master/TeachYourselfCS-CN.md#%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F

> 本文档是对 [TeachYourselfCS](https://teachyourselfcs.com) 内容的中文翻译，原作者为 [Ozan Onay](https://twitter.com/oznova_) 和 [Myles Byrne](https://twitter.com/quackingduck)。如需了解翻译相关信息或帮助改进翻译，请参见 [本文档结尾](#这份指引是谁翻译的)。
>
> This document is a Chinese translation of [TeachYourselfCS](https://teachyourselfcs.com), which is written by [Ozan Onay](https://twitter.com/oznova_) and [Myles Byrne](https://twitter.com/quackingduck). For more information about this translation, please refer to [the end of this document](#这份指引是谁翻译的).

如果你是一个自学成才的工程师，或者从编程培训班毕业，那么你很有必要学习计算机科学。幸运的是，不必为此花上数年光阴和不菲费用去攻读一个学位：仅仅依靠自己，你就可以获得世界一流水平的教育💸。

互联网上，到处都有许多的学习资源，然而精华与糟粕并存。你所需要的，不是一个诸如「200+ 免费在线课程」的清单，而是以下问题的答案：

* 你应当学习 **哪些科目**，为什么？
* 对于这些科目，**最好的书籍或者视频课程** 是什么？

在这份指引中，我们尝试对这些问题做出确定的回答。

#### 简而言之

大致按照列出的顺序，借助我们所建议的教材或者视频课程（但是最好二者兼用），学习如下的九门科目。目标是先花 100 到 200 个小时学习完每一个科目，然后在你职业生涯中，不时温习其中的精髓🚀。

| 科目 | 为何要学？ | 最佳书籍 | 最佳视频 |
|-|-|-|-|
| [编程](#编程) | 不要做一个「永远没彻底搞懂」诸如递归等概念的程序员。 | [《计算机程序的构造和解释》](https://book.douban.com/subject/1148282/) | Brian Harvey’s Berkeley CS 61A |
| [计算机系统结构](#计算机系统结构) | 如果你对于计算机如何工作没有具体的概念，那么你所做出的所有高级抽象都是空中楼阁。 | [《深入理解计算机系统》](https://book.douban.com/subject/26912767/) | Berkeley CS 61C |
| [算法与数据结构](#算法和数据结构) | 如果你不懂得如何使用栈、队列、树、图等常见数据结构，遇到有难度的问题时，你将束手无策。 | [《算法设计手册》](https://book.douban.com/subject/4048566/) | Steven Skiena’s lectures |
| [数学知识](#数学知识) | 计算机科学基本上是应用数学的一个「跑偏的」分支，因此学习数学将会给你带来竞争优势。 | [《计算机科学中的数学》](https://book.douban.com/subject/33396340/) | Tom Leighton’s MIT 6.042J |
| [操作系统](#操作系统) | 你所写的代码，基本上都由操作系统来运行，因此你应当了解其运作的原理。 | [《操作系统导论》](https://book.douban.com/subject/33463930/) | Berkeley CS 162 |
| [计算机网络](#计算机网络) | 互联网已然势不可挡：理解工作原理才能解锁全部潜力。 | [《计算机网络：自顶向下方法》](https://book.douban.com/subject/30280001/) | Stanford CS 144 |
| [数据库](#数据库) | 对于多数重要程序，数据是其核心，然而很少人理解数据库系统的工作原理。 | *[Readings in Database Systems](https://book.douban.com/subject/2256069/)* （暂无中译本） | Joe Hellerstein’s Berkeley CS 186 |
| [编程语言与编译器](#编程语言与编译器) | 若你懂得编程语言和编译器如何工作，你就能写出更好的代码，更轻松地学习新的编程语言。 | *[Crafting Interpreters](https://craftinginterpreters.com/)* | Alex Aiken’s course on Lagunita   |
| [分布式系统](#分布式系统) | 如今，**多数** 系统都是分布式的。 | [《数据密集型应用系统设计》](https://book.douban.com/subject/30329536/) | MIT 6.824 |

#### 还是太多？

如果花几年时间自学 9 门科目让人望而却步，我们建议你只专注于两本书：**《深入理解计算机系统》** 和 **《数据密集型应用系统设计》**。根据我们的经验，投入到这两本书的时间可以获得极高的回报率，特别适合从事网络应用开发的自学工程师。这两本书也可以作为上面表格中其他科目的纲领。

#### 为什么要学习计算机科学？

软件工程师分为两种：一种充分理解了计算机科学，从而有能力应对充满挑战的创造性工作；另一种仅仅凭着对一些高级工具的熟悉而勉强应付。

这两种人都自称软件工程师，都能在职业生涯早期挣到差不多的工资。然而，随着时间流逝，第一种工程师不断成长，所做的事情将会越来越有意义且更为高薪，不论是有价值的商业工作、突破性的开源项目、技术上的领导力或者高质量的个人贡献。

> 全球短信系统每日收发约 200 亿条信息，而仅仅靠 57 名工程师，现在的 WhatsApp 每日收发 420 亿条。
>
> — Benedict Evans (@BenedictEvans) [2016 年 2 月 2 日](https://twitter.com/BenedictEvans/status/694342874729545729)

第一种工程师总是寻求深入学习计算机科学的方法，或是通过传统的方法学习，或是在职业生涯中永无止息地学习；第二种工程师
通常浮于表面，只学习某些特定的工具和技术，而不研究其底层的基本原理，仅仅在技术潮流的风向改变时学习新的技能。

如今，涌入计算机行业的人数激增，然而计算机专业的毕业生数量基本上未曾改变。第二种工程师的供过于求正在开始减少他们的工作机会，使他们无法涉足行业内更加有意义的工作。对你而言，不论正在努力成为第一种工程师，还是只想让自己的职业生涯更加安全，学习计算机科学是唯一可靠的途径。

> 23333 然而他们……[pic.twitter.com/XVNYlXAHar](https://web.archive.org/web/20170528095858/https://twitter.com/jenna/status/838161631662092289)
>
> — Jenna Bilotta (@jenna) [2017 年 3 月 4 日](https://web.archive.org/web/20170528095858/https://twitter.com/jenna/status/838161631662092289)

#### 编程

大多数计算机专业本科教学以程序设计「导论」作为开始。这类课程的最佳版本不仅能满足初学者的需要，还适用于那些在初学编程阶段遗漏了某些有益的概念和程序设计模式的人。

对于这部分内容，我们的标准推荐是这部经典著作：[《计算机程序的构造和解释》](https://book.douban.com/subject/1148282/)。在网络上，这本书既可供 [免费阅读（英文版）](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html)，也作为 [MIT 的免费视频课程](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video-lectures/)。不过尽管这些视频课程很不错，我们对于视频课程的推荐实际上是 [Brian Harvey 开设的 SICP 课程](https://archive.org/details/ucberkeley-webcast-PL3E89002AA9B9879E?sort=titleSorter)（即 Berkeley 的 61A 课程）。比起 MIT 的课程，它更加完善，更适用于初学者。

我们建议至少学完 SICP 的前三章，并完成配套的习题。如果需要额外的练习，可以去解决一些小的程序设计问题，比如 [exercism](http://exercism.io)。

> **中文翻译新增：**
>
> * 关于 SICP 国内视频观看地址
>   * [MIT 的免费视频课程（中英字幕）](https://www.bilibili.com/video/av8515129/)
>   * [Brian Harvey 开设的 SICP 课程（英文字幕）](https://www.bilibili.com/video/av40460492/)
> * Scheme 学习的相关资源参见：<https://github.com/DeathKing/Learning-SICP>
> * 更详细的补充说明：[#3](https://github.com/izackwu/TeachYourselfCS-CN/issues/3)

自从 2016 年首次发布这份指南以来，最常被问到的一个问题是，我们是否推荐由 John DeNero 讲授的更新的 CS 61A 课程，以及配套的书籍 [*Composing Programs*](https://composingprograms.com/)，这本书「继承自 SICP」 但使用 Python 讲解。我们认为 DeNero 的课程也很不错，有的学生可能更喜欢，但我们还是建议把 SICP、Scheme 和 Brian Harvey 的视频课程作为首选。

为什么这么说呢？因为 SICP 是独一无二的，它可以——至少很有可能——改变你对计算机和编程的基本认识。不是每个人都有这样的体验。有的人讨厌这本书，有的人看了前几页就放弃了。但潜在的回报让它值得一读。

如果你觉得 SICP 过于难，试试 *Composing Programs*。如果还是不合适，那我们推荐 《程序设计方法》（[中文版](https://book.douban.com/subject/1140942/)，[英文版](http://www.htdp.org/)） ；如果你觉得 SICP 过于简单，那我们推荐 [*Concepts, Techniques, and Models of Computer Programming*](https://book.douban.com/subject/1782316/)。如果读这些书让你觉得没有收获，也许你应该先学习其他科目，一两年后再重新审视编程的理念。

> 新版原文删除了对 *Concepts, Techniques, and Models of Computer Programming* 一书的推荐，但这本书对各种编程模型有深入的见解，值得一读。所以译文中依然保留。
> — 译者注

最后，有一点要说明的是：本指南 **不适用** 于完全不懂编程的新手。我们假定你是一个没有计算机专业背景的程序员，希望填补一些知识空白。事实上，我们把「编程」章节包括进来只是提醒你还有更多知识需要学习。对于那些从来没有学过编程，但又想学的人来说，这份 [指南](https://www.reddit.com/r/learnprogramming/wiki/faq#wiki_getting_started) 更合适。

[![计算机程序的构造和解释](https://user-images.githubusercontent.com/20233656/66758473-ef7bff80-eed0-11e9-944a-15ae5c8542ca.jpg)](https://book.douban.com/subject/1148282/)

#### 计算机系统结构

计算机系统结构——有时候又被称为「计算机系统」或者「计算机组成」——是了解软件底层的的重要视角。根据我们的经验，这是自学的软件工程师最容易忽视的领域。

我们最喜欢的入门书是 [《深入理解计算机系统》](https://book.douban.com/subject/26912767/)。典型的 [计算机体系结构导论课程](http://csapp.cs.cmu.edu/3e/courses.html) 会涵盖本书的 1-6 章。

我们喜爱《深入理解计算机系统》，因为它的实用性，并且站在程序员的视角。虽然计算机体系结构的内容比本书所涉及的内容多得多，但对于那些想了解计算机系统以求编写更快、更高效、更可靠的软件的人来说，这本书是很好的起点。

对于那些既想了解这个主题又想兼顾硬件和软件的知识的人来说，我们推荐 [《计算机系统要素》](https://book.douban.com/subject/1998341/)，又名「从与非门到俄罗斯方块」（Nand2Tetris），这本书规模宏大，让读者对计算机内的所有部分如何协同工作有完全的认识。这本书的每一章节对应如何构建计算机整体系统中的一小部分，从用 HDL（硬件描述语言）写基本的逻辑门电路出发，途经 CPU 和汇编，最终抵达诸如俄罗斯方块这般规模的应用程序。

我们推荐把此书的前六章读完，并完成对应的项目练习。这么做，你将更加深入地理解，计算机体系结构和运行其上的软件之间的关系。

这本书的前半部分（包括所有对应的项目）均可从 [Nand2Tetris 的网站上](http://www.nand2tetris.org) 免费获得。同时，在 Coursera 上，这是一门 [视频课程](https://www.coursera.org/learn/build-a-computer)。

为了追求简洁和紧凑，这本书牺牲了内容上的深度。尤其值得注意的是，流水线和存储层次结构是现代计算机体系结构中极其重要的两个概念，然而这本书对此几乎毫无涉及。

当你掌握了 Nand2Tetris 的内容后，我们推荐要么回到《深入理解计算机系统》，或者考虑 Patterson 和 Hennessy 二人所著的 [《计算机组成与设计》](https://book.douban.com/subject/26604008/)，一本优秀的经典著作。这本书中的不同章节重要程度不一，因此我们建议根据 Berkeley 的 [CS61C 课程](http://inst.eecs.berkeley.edu/~cs61c/sp15/) 「计算机体系结构中的伟大思想」来着重阅读一些章节。这门课的笔记和实验在网络上可以免费获得，并且在 [互联网档案](https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iCl2-D-FS5mk0jFF6cYSJs_) 中有这门课程的过往资料。

[![深入理解计算机系统](https://user-images.githubusercontent.com/20510068/82109944-12270d00-976d-11ea-85a9-774e4f762ec9.png)](https://book.douban.com/subject/26912767/) [![计算机系统要素](https://user-images.githubusercontent.com/20233656/66758695-60231c00-eed1-11e9-8422-a4acfb10a390.jpg)](http://www.nand2tetris.org)

> 硬件是平台。
>
> — Mike Acton, Engine Director at Insomniac Games
> （[观看他在 CppCon 上的演说](https://www.youtube.com/watch?v=rX0ItVEVjHc)）

#### 算法与数据结构

正如几十年来的共识，我们认为，计算机科学教育所赋予人们的最大能量在于对常见算法和数据结构的熟悉。此外，这也可以训练一个人对于各种问题的解决能力，有助于其他领域的学习。

关于算法与数据结构，有成百上千的书可供使用，但是我们的最爱是 Steven Skiena 编写的 [《算法设计手册》](https://book.douban.com/subject/4048566/) 。显而易见，他对此充满热爱，迫不及待地想要帮助其他人理解。在我们看来，这本书给人一种焕然一新的体验，完全不同于那些更加经常被推荐的书（比如 Cormen、Leiserson、Rivest、Stein 或 Sedgewick 的书，后两者充斥着过多的证明，不适合以 **解决问题** 为导向的学习）。

如果你更喜欢视频课程，[Skiena 慷慨地提供了他的课程](https://www.youtube.com/watch?v=A2bFN3MyNDA&list=PLOtl7M3yp-DX32N0fVIyvn7ipWKNGmwpp)。此外，Tim Roughgarden 的课程也很不错，
在 Stanford 的 MOOC 平台 Lagunita，或者 [Coursera](https://www.coursera.org/specializations/algorithms) 上均可获得。Skiena 和 Roughgarden 的这两门课程没有优劣之分，选择何者取决于个人品味。

至于练习，我们推荐学生在 [Leetcode](https://leetcode.com) 上解决问题。Leetcode 上的问题往往有趣且带有良好的解法和讨论。此外，在竞争日益激烈的软件行业，这些问题可以帮助你评估自己应对技术面试中常见问题的能力。我们建议解决大约 100 道随机挑选的 Leetcode 问题，作为学习的一部分。

最后，我们强烈推荐 [《怎样解题》](https://book.douban.com/subject/2124114/)。这本书极为优秀且独特，指导人们解决广义上的问题，因而一如其适用于数学，它适用于计算机科学。

[![算法设计手册](https://user-images.githubusercontent.com/20233656/66759121-361e2980-eed2-11e9-913c-8fc48c67122a.jpg)](https://book.douban.com/subject/4048566/) [![怎样解题](https://user-images.githubusercontent.com/20233656/66759282-8e552b80-eed2-11e9-89de-16b1f8d82e78.jpg)](https://book.douban.com/subject/2124114/)

> 我可以广泛推荐的方法只有一个：写之前先思考。
>
>— Richard Hamming

#### 数学知识

从某个角度说，计算机科学是应用数学的一个「发育过度」的分支。尽管许多软件工程师试图——并且在不同程度上成功做到——忽视这一点，我们鼓励你用学习来拥抱数学。如若成功，比起那些没有掌握数学的人，你将获得巨大的竞争优势。

对于计算机科学，数学中最相关的领域是「离散数学」，其中的「离散」与「连续」相对立，大致上指的是应用数学中那些有趣的主题，而不是微积分之类的。由于定义比较含糊，试图掌握离散数学的全部内容是没有意义的。较为现实的学习目标是，了解逻辑、排列组合、概率论、集合论、图论以及密码学相关的一些数论知识。考虑到线性代数在计算机图形学和机器学习中的重要性，该领域同样值得学习。

学习离散数学，我们建议从 [László Lovász 的课程笔记](http://www.cs.elte.hu/~lovasz/dmbook.ps) 开始。Lovász 教授成功地让这些内容浅显易懂且符合直觉，因此，比起正式的教材，这更适合初学者。

对于更加高阶的学习，我们推荐 [《计算机科学中的数学》](https://book.douban.com/subject/33396340/)，MIT 同名课程的课程笔记，篇幅与书籍相当（事实上，现已出版）。这门课程的视频同样 [可免费获得](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/video-lectures/)，是我们所推荐的学习视频。

对于线性代数，我们建议从 [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) 系列视频开始，然后再去学习 Gilbert Strang 的 [《线性代数导论》](https://book.douban.com/subject/34820335/) 和 [视频课程](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/)。

[![计算机科学中的数学](https://user-images.githubusercontent.com/20233656/66759673-4387e380-eed3-11e9-8469-3e677d108e91.jpg)](https://book.douban.com/subject/33396340/)

> 如果人们不相信数学是简单的，那么只能是因为他们没有意识到生活有多么复杂。
>
>— John von Neumann

#### 操作系统

[《操作系统概念》](https://book.douban.com/subject/30297919/)（「恐龙书」）和 [《现代操作系统》](https://book.douban.com/subject/27096665/) 是操作系统领域的经典书籍。二者都因为写作风格和对学生不友好而招致了一些批评。

[《操作系统导论》（*Operating Systems: Three Easy Pieces*）](https://book.douban.com/subject/33463930/) 是一个不错的替代品，并且 [可在网上免费获得（英文版）](http://pages.cs.wisc.edu/~remzi/OSTEP/)。我们格外喜欢这本书的结构，并且认为这本书的习题很值得一做。

在读完《操作系统导论》后，我们鼓励你探索特定操作系统的设计。可以借助「{OS name} Internals」风格的书籍，比如 [*Lion's commentary on Unix*](https://www.amazon.com/Lions-Commentary-Unix-John/dp/1573980137/)， [*The Design and Implementation of the FreeBSD Operating System*](https://www.amazon.com/Design-Implementation-FreeBSD-Operating-System/dp/0321968972/)，以及 [*Mac OS X Internals*](https://www.amazon.com/Mac-OS-Internals-Systems-Approach/dp/0321278542/)。对于 Linux ，我们推荐 Robert Love 的 [《Linux 内核设计与实现》](https://book.douban.com/subject/6097773/)。

为了巩固对操作系统的理解，阅读小型系统内核的代码并且为其增加特性是一个很不错的方法。比如，[xv6](https://pdos.csail.mit.edu/6.828/2016/xv6.html)，由 MIT 的一门课程所维护的从 Unix V6 到 ANSI C 和 x86 的移植，就是一个很棒的选择。《操作系统导论》有一个附录，记载了一些可能的 [xv6 实验项目](http://pages.cs.wisc.edu/~remzi/OSTEP/lab-projects-xv6.pdf)，其中充满了关于潜在项目的很棒想法。

[![操作系统导论](https://user-images.githubusercontent.com/20233656/66759780-78943600-eed3-11e9-8eb5-6472c318c265.jpg)](https://book.douban.com/subject/33463930/)

#### 计算机网络

鉴于有那么多关于网络服务端和客户端的软件工程，计算机网络是计算机科学中价值最为「立竿见影」的领域之一。我们的学生，系统性地学习了计算机网络，最终能够理解那些曾困扰他们多年的术语、概念和协议。

在这一主题上，我们最爱的书籍是 [《计算机网络：自顶向下方法》](https://book.douban.com/subject/30280001/)。书中的小项目和习题相当值得练习，尤其是其中的「Wireshark labs」（[这部分在网上可以获得](http://www-net.cs.umass.edu/wireshark-labs/)）。

如果更喜欢视频课程，我们推荐 Stanford 的 [*Introduction to Computer Networking*](https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about)，可在他们的 MOOC 平台 Lagunita 上免费观看。

对于计算机网络的学习，做项目比完成小的习题更有益。一些可能的项目有：HTTP 服务器，基于 UDP 的聊天 APP，[迷你 TCP 栈](http://jvns.ca/blog/2014/08/12/what-happens-if-you-write-a-tcp-stack-in-python/)，代理，负载均衡器，或者分布式哈希表。

[![《计算机网络：自顶向下方法》](https://user-images.githubusercontent.com/20233656/66760004-d9bc0980-eed3-11e9-9b3f-74bf54b9571f.jpg)](https://book.douban.com/subject/30280001/)

> 你无法盯着水晶球预见未来，未来的互联网何去何从取决于社会。
>
>— Bob Kahn

#### 数据库

比起其他主题，自学数据库系统需要更多的付出。这是一个相对年轻的研究领域，并且出于很强的商业动机，研究者把想法藏在紧闭的门后。此外，许多原本有潜力写出优秀教材的作者反而选择了加入或创立公司。

鉴于如上情况，我们鼓励自学者大体上抛弃教材，而是从 [2015 年春季学期的 CS 186 课程](https://archive.org/details/UCBerkeley_Course_Computer_Science_186)（Joe Hellerstein 在 Berkeley 的数据库课程）开始，然后前往阅读论文。

对于初学者，有一篇格外值得提及的论文：[*Architecture of a Database System*](http://db.cs.berkeley.edu/papers/fntdb07-architecture.pdf)。这篇论文提供了独特的对关系型数据库管理系统（RDBMS）如何工作的高层次观点，是后续学习的实用梗概。

[*Readings in Database Systems*](https://book.douban.com/subject/2256069/)，或者以 [数据库「红书」](http://www.redbook.io/) 更为人知，是由 Peter Bailis、Joe Hellerstein 和 Michael Stonebraker 编纂的论文合集。对于那些想要在 CS 186 课程的水平更进一步的学习者，「红书」应当是下一步。

如果你坚持一定要一本导论教材，那我们推荐 Ramakrishnan 和 Gehrke 所著的 [《数据库管理系统：原理与设计》](https://book.douban.com/subject/1155934/)。如需更深一步，Jim Gray 的经典著作 [*Transaction Processing: Concepts and Techniques*](https://book.douban.com/subject/2586390/) 值得一读，不过我们不建议把这本书当作首要资源。

如果没有编写足够数量的代码，很难巩固数据库理论。CS 186 课程的学生给 Spark 添加特性，倒是不错的项目，不过我们仅仅建议从零实现一个简单的关系型数据库管理系统。自然，它将不会有太多的特性，但是即便只实现典型的关系型数据库管理系统每个方面最基础的功能，也是相当有启发的。

最后，数据模型往往是数据库中一个被忽视的、教学不充分的方面。关于这个主题，我们推荐的书籍是 [*Data and Reality: A Timeless Perspective on Perceiving and Managing Information in Our Imprecise World*](https://book.douban.com/subject/17915870/)。

[![Readings in Database Systems](https://user-images.githubusercontent.com/20233656/66760126-08d27b00-eed4-11e9-82c6-46c571036aa1.jpg)](https://book.douban.com/subject/2256069/) [![数据库管理系统：原理与设计](https://user-images.githubusercontent.com/20233656/66760358-85655980-eed4-11e9-9130-66d2ecea5700.jpg)](https://book.douban.com/subject/1155934/)

#### 编程语言与编译器

多数程序员学习编程语言的知识，而多数计算机科学家学习编程语言 **相关** 的知识。这使得计算机科学家比起程序员拥有显著的优势，即便在编程领域！因为他们的知识可以推而广之：相较只学习过特定编程语言的人，他们可以更深入更快速地理解新的编程语言。

我们推荐的入门书是 Bob Nystrom 所著的优秀的 [*Crafting Interpreters*](https://craftinginterpreters.com/contents.html)，可在网上免费获取。这本书条理清晰，富有趣味性，非常适合那些想要更好地理解语言和语言工具的人。我们建议你花时间读完整本书，并尝试任何一个感兴趣的「挑战」。

另一本更为传统的推荐书籍是 [《编译原理》](https://book.douban.com/subject/3296317/)，通常称为「龙书」。不幸的是，这本书不是为自学者而设计的，而是供教师从中挑选一些主题用于 1-2 学期的教学。

如果你选择使用龙书进行自学，你需要从中甄选主题，而且最好是在导师的帮助下。我们建议依据某个视频课程来设定学习的结构，然后按需从龙书中获取深入的内容。我们推荐的在线课程是 [Alex Aiken 在 MOOC 平台 edX 所开设的](https://www.edx.org/course/compilers)。

[![编译原理](https://user-images.githubusercontent.com/20233656/66760486-ca898b80-eed4-11e9-80ba-df298ac8d5da.jpg)](https://book.douban.com/subject/3296317/)

> 不要做一个只写样板代码的程序员。相反，给用户和其他程序员创造工具。从纺织工业和钢铁工业中学习历史教训：你想制造机器和工具，还是操作这些机器？
>
>— Ras Bodik 在他的编译器课程伊始

#### 分布式系统

随着计算机在数量上的增加，计算机同样开始 **分散**。尽管商业公司过去愿意购买越来越大的大型机，现在的典型情况是，甚至很小的应用程序都同时在多台机器上运行。思考这样做的利弊权衡，即是分布式系统的研究所在，也是越来越重要的一项技能。

我们推荐的自学参考书是 Martin Kleppmann 的 [《数据密集型应用系统设计》](https://book.douban.com/subject/30329536/)。与传统的教科书相比，它是一本为实践者设计的具有很高的可读性的书，并且保持了深度和严谨性。

对于那些偏爱传统教材，或者希望可以从网上免费获取的人，我们推荐的教材是 Maarten van Steen 和 Andrew Tanenbaum 所著的 《分布式系统原理与范型》（[中文第二版](https://book.douban.com/subject/3108801/)，[英文第三版](https://book.douban.com/subject/26979326/)）。

对于喜欢视频课程的人，[MIT 的 6.824](https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB) 是一门很好的在线视频课程，由 Robert Morris 教授的研究生课程，在 [这里](https://pdos.csail.mit.edu/6.824/schedule.html) 可以看到课程安排。

不管选择怎样的教材或者其他辅助资料，学习分布式系统必然要求阅读论文。[这里](http://dsrg.pdos.csail.mit.edu/papers/) 有一个不错的论文清单，而且我们强烈建议你出席你当地的 [Papers We Love](http://paperswelove.org/)（仅限美国）。

[![数据密集型应用系统设计](https://user-images.githubusercontent.com/20510068/82111034-94ff9600-9774-11ea-9d49-90b00f746659.png)](https://book.douban.com/subject/30329536/)

#### 常见问题解答

##### 这份指引的目标受众是？

我们面向自学的软件工程师、培训班学生、「早熟的」高中生或者想要通过自学补充正式教育的大学生。关于何时开启这段自学旅程，完全取决于个人，不过多数人在有一定的职业经历后深入学习计算机科学理论会获益匪浅。比如，我们注意到，如果学生在工作中曾经使用过数据库，他们会 **喜爱** 学习数据库系统课程；如果学生从事过一两个 Web 项目，他们会 **喜爱** 学习计算机网络。

##### 人工智能/计算机图形学/XX 主题怎么样？

我们试图把计算机科学主题清单限制到那些我们认为 **每一个软件工程师** 都应该了解的内容，不限于专业或行业。拥有了这些基础，你将能更加轻松地挑选教材或论文，然而无需指引地学习核心概念。在这里，我们给出一些其他常见主题的自学起点：

* 人工智能：通过观看视频并完成 Pacman 项目来学习 [Berkeley 的 AI 课程](http://ai.berkeley.edu/)。至于教材，使用 Russell 和 Norvig 编写的 [《人工智能：一种现代方法》](https://book.douban.com/subject/25796281/)。
* 机器学习：学习吴恩达在 Coursera 上的课程。耐心学习，先确保理解了基础概念再奔向类如深度学习的诱人新主题。
* 计算机图形学：学习 [Berkeley CS 184 课程](http://inst.eecs.berkeley.edu/~cs184/fa12/onlinelectures.html) 的材料，使用 [《计算机图形学：原理及实践》](https://book.douban.com/subject/30402778/) 作为教材。

##### 一定要严格遵守推荐的学习次序吗？

事实上，所有主题之间都有一定程度的重叠，彼此循环引用。以离散数学和算法的关系为例：先学习数学可以帮助你更深入地分析和理解算法，然而先学习算法可以为学习离散数学提供更大的动力和应用背景。理想情况下，你将在你的职业生涯多次重温二者。

因此，我们所推荐的次序主要是为了帮助你 **起步**……如果你出于某种强烈的原因而倾向以不同的顺序学习，那也没有关系，勇敢开始吧！不过在我们看来，最重要的「先决条件」是：先学计算机体系结构再学操作系统或数据库，先学计算机网络和操作系统再学分布式系统。

##### 和 Open Source Society、freeCodeCamp curricula 等比起来，这份指引？

[OSS 指引](https://github.com/open-source-society/computer-science) 涵盖太多主题，在许多主题中推荐劣质资源，没有就特定课程哪些方面有价值提供原因或指引。我们努力对这份指引中的课程加以限制，仅仅包括那些你作为软件工程师 **确实需要了解的**，不论你的专业方向，并且对每门课程为何必要做出了解释以帮助你理解。

FreeCodeCamp 主要关注编程，而不是计算机科学。至于你为什么要学习计算机科学，参见 [上文](#为什么要学习计算机科学)。如果你是个新手，我们建议先学 freeCodeCamp 的课程，一两年后再回归本指南。

##### XX 编程语言怎么样？

学习一门特定的编程语言和学习计算机科学的一个领域完全不在一个维度——相比之下，学习语言 **容易** 且 **缺乏价值**。如果你已经了解了一些语言，我们强烈建议遵照我们的指引，然后在学习的空当中习得语言，或者暂且不管以后再说。如果你已经把编程学得不错了（比如学完了 **《计算机程序的构造和解释》**），尤其是如果你学习过编译器，那么面对一门新的语言，你只需要花一个周末稍多的时间即可基本掌握，之后你可以在工作中学习相关的类库/工具/生态。

##### XX 流行技术怎么样？

没有任何一种技术的重要程度可以达到学习其使用足以成为计算机科学教学的核心部分。不过，你对学习那门技术充满热情，这很不错。诀窍是先从特定的技术回退到基本的领域或概念，判断这门流行技术在技术的宏观大局中位于何处，然后才深入学习这门技术。

##### 为什么你们还在推荐 SICP?

先尝试读一下，有些人觉得 SICP 让人神魂颠倒，这在其他书很少见。如果你不喜欢，你可以尝试其他的东西，也许以后再回到 SICP。

##### 为什么你们还在推荐龙书？

龙书依旧是内容最为完整的编译器单本书籍。由于过分强调一些如今不够时新的主题的细节，比如解析，这本书招致了恶评。然而事实上，这本书从未打算供人一页一页的学习，而仅仅是为了给教师准备一门课程提供足够的材料。类似地，自学者可以从书中量身按需挑选主题，或者最好依照公开课授课教师在课程大纲中的建议。

##### 如何便宜获取教材？

我们所建议的许多教材在网上都可以免费获得，这多亏了作者们的慷慨。对于那些不免费的书籍，我们建议购买旧版本的二手书籍。广而言之，如果一本教材有多个版本，旧版本大概率是完全足够使用的。即便新版本的价格是旧版本的 10 倍，新版本也绝不可能比旧版本好 10 倍！

**中文翻译新增：** 事实上，比起美国，在国内购买技术书籍可以说是相当「廉价」了。如果仍旧寻求更加便宜的购买渠道，可以参考这篇 V2EX 上的 [讨论帖子](https://www.v2ex.com/t/578615)，其中提到了一些不错的购买渠道。

##### 这份指引是谁写的？

这份指引由 [Bradfield School of Computer Science](https://bradfieldcs.com)（旧金山）的两位教员：[Ozan Onay](https://twitter.com/oznova_) 和 [Myles Byrne](https://twitter.com/quackingduck) 编写，并由 Oz 于 2020 年更新。这份指引基于我们对数千名自学成才的工程师和培训班学生教授计算机科学基础的经验。感谢我们所有学生对自学资源的持续反馈。

只要有足够的时间和动力，我们非常有信心，你可以自学完以上所有课程。如果你喜欢一个集中式、结构化、由教师指导的课程，你可能对我们的 [计算机科学强化班](https://bradfieldcs.com/csi/) 感兴趣。我们 [不建议](https://ozwrites.com/masters/) 你去攻读硕士学位。

##### 这份指引是谁翻译的？

这份指引的中文翻译是 [社区共同贡献的成果](https://github.com/izackwu/TeachYourselfCS-CN/)，我们欢迎任何反馈和改进！

### 用十年时间学会编程 - Peter Norvig （中文版）

> 摘录自：http://daiyuwen.freeshell.org/gb/misc/21-days-cn.html

为什么每个人都匆匆忙忙？

走进任何一个书店，你都能看到《24小时学会Java》这样的书，旁边还会有各种变种，教你怎么在几个小时或者几天内学会C、SQL、Ruby、算法等等。

用亚马逊的高级搜索[标题：teach, yourself, hours, since:2000]可以找到512本这样的书，其中排名前10的有9本都是编程的书籍（另外一本是关于记账的）。你用learn替代teach yourself，或者用days替代hours可以得到相同的结果。

这么看来，要么就是人们学习编程非常地匆忙，要么就是编程学起来比其他东西简单多了。Felleisen等人在他们《如何设计程序》一书中承认了这个潮流。他们说：“坏的编程是容易的，就算是白痴也能在21天里面学会坏编程。”

Abstruse Goose网站也有一个这样的漫画来讽刺这种现象。

!()[https://pic2.zhimg.com/80/v2-acb538092ccf6266d38a46a48d2a4e89_1440w.webp]

我们来分析一下，一个像《24小时内教会你自己C++》这样的标题意味着什么：

自学：在24小时内，你并没有时间去写几个有意义的程序，并且从中总结成功的经验和吸取教训。你没有时间去跟一个经验丰富的程序员合作，然后理解在真正的c++环境里面工作是什么样的。简单来说，你没有时间来学太多东西。所以这本书只能谈论一些肤浅的认知，而不是深入的理解。Alexander Pope（诗人、讽刺作家）说过，只知皮毛是一件危险的事情（A little knowledge is a dangerous thing）
C++：在24小时内，你也许能够学会C++的一些语法（如果你已经知道其他编程语言），但是你并不能学会如何使用这门语言。简单来说，假如你是一个Basic程序员，你可以学会如何用C++的语法按照Basic的风格写程序，但是你无法学习到C++语法真正的优势（和劣势）。那这又有什么意义呢？Alan Perils曾经说过：“一门无法影响你对编程看法的语言是不值得学习的。”有一种可能是，你需要学习一点点C++（也有可能是一些类似JavaScript或者Processing的东西）来跟某个现存的工具交互，以完成某个特定的任务。但这其实不是在学习如何编程，而是在学习如何完成那项任务。
在24小时内：不幸的是，这不够，下一节会说明。
用十年时间自学编程
研究者已经证明了，在众多的领域中，任何一个都需要10年左右的时间来培养一个专家，包括下棋、作曲、电报操作、绘画、弹钢琴、游泳、网球、神经心理学和拓扑研究。

关键在于刻意的练习：不仅仅是一遍又一遍的重复，而是用正好超出你能力边界一点点的任务挑战自己。尝试，并在过程中和之后分析自己的表现，并纠正任何错误。然后就是重复，再重复。

看起来并没有一个明显的捷径：即便是4岁就已经是音乐神童的莫扎特，也要等到13年之后才开始创作出世界级的音乐。Beatles乐队看起来像是从1964年的一场演唱会开始突然火起来，但是他们从1957年开始就在利物浦和汉堡的小酒吧里面表演了，而直到1967年他们才创作出第一个真正的伟大关键作品，虽然在那之前他们已经挺火的了。

Malcolm Galdwell推广了这个概念，不过他更强调的是10000个小时而不是10年。Henri Cartier-Bresson（1908-2004）有另一个标准：“你的头10000张照片是你最差的作品。”（他没预料到的是，用数码相机，有些人一周内就能拍出这么多照片）真正的专家级精通可能需要一生的时间：Samuel Johnson（1709-1784）说过：“任何领域的精通只能用一生的努力去获取；不能用更少的代价来获得。”Chaucer（1340-1400）曾经抱怨过“人生太短，技艺却需要这么久去学习”。

Hippocrates（希波克拉底）有句名言：“人生短暂，技艺长久，机会稍纵即逝，经验不可靠，决策困难”。当然，没有一个数字是最终的答案：因为不可能所有的技能（编程，下棋，音乐等等）都会花费相同的时间来获得。

就像 K. Anders Ericsson教授所说：“在大多数领域内，即便是最天才的人达到最高水平表现所需要的时间也是值得注意的。1万小时这个数字只是给你一个大致的感觉，我们在谈论每周10到20个小时的努力，天才也需要多年才能达到的最高水平。”

所以你想成为一个程序员
这里是我的编程成功秘诀：

对编程产生兴趣，然后写一些有趣的程序。确保它始终是有趣的，这样你才能愿意投入10年或者1万小时
写程序。最好的学习方法是通过实践学习。更技术地讲，“个体的最高水平不是靠经验的积累自动获得的，即便是经验丰富的人仍然能够通过刻意地训练提升自己的表现。”“最有效的学习方法需要一个定义良好的任务，配合合理的难度曲线，富有信息的反馈，重复和纠错的机会。”《实践中的认知：心灵，数学和日常生活中的文化》这本书提供了一个有趣的参考。
跟其他程序员对话交流；读他们的程序。这比任何书籍或者培训课程都重要。
如果你想的话，上四年大学（或者进一步读研）。这会让你获得需要学历证明的敲门砖，而且会让你对这个领域有一个更深的认知，但是如果你不喜欢上学的话，你可以（经过一些投入）靠自己或者在工作中获得类似的经验。在任何一种情况中，只看书都是不够的。Eric Raymond，《新黑客字典》的作者，说过：“研究刷子和颜料不能产生伟大的画家，计算机教育在培养专家程序员上的效果也不比这个好。”我曾经雇佣过的最好的程序员之一只有高中学历，他创作了很多很棒的软件，有自己的新闻群组，并且赚到了足够的股票期权买下了自己的夜店。
跟其他程序员一起合作项目。在某些项目上成为最好的一个，在某些项目中成为最差的一个。当时是最好的那个的时候，检验一下自己领导一个项目的能力，并且用自己的视野来激励其他人。当你是最差的那一个的时候，你学习其他大师的方法，学习他们不喜欢做什么（因为他们会让你帮他们做这种事）。
接手做其他程序员做过的项目。理解其他程序员写的程序。看看理解并修复一个项目（当原始作者不在的时候）需要什么。思考一下如何设计程序，让后来者可以在你之后更轻松地维护。
学习至少半打（6门）编程语言。包括一门强调类别抽象的语言（比如Java或者C++），一门强调函数式抽象的（比如Lisp，ML或者Haskell），一门强调语法抽象的（比如Lisp），一门强调声明式的（比如Prolog或者C++模板），一门强调并行的（比如Clojure或者Go）。
记住，计算机科学里面有一个计算机。知道你的计算机执行一条指令需要多久，从内存中取一个字需要多久，从硬盘中连续读取字需要多久，在硬盘上寻找新的地址需要多久（答案在后面）。
参与一个语言标准化的工作。可以是ANSI C++委员会，或者是参与决策你的本地的代码规范里面缩进是用2个空格还是4个空格。任何一种方式，你都可以学习到其他人喜欢一个语言的地方，他们的深入感受，以及他们为什么这么想。
有良好的意识可以尽快从语言的标准化努力中脱身。
所有的这些在心中，那就有个问题，仅仅靠看书能走多远呢？我的一个小孩出生之前，我阅读了所有的如何带孩子的书，但我仍然毫无头绪。30个月之后，我的第二个小孩出生了，我还会去看这些书吗？不会了。相反的，我依靠我的个人经验，实践证明，它们比专家写的书有用靠谱多了。

Fred Brooks在他的文章《No Silver Bullet》中找到了一个三步计划，用来发掘伟大的程序员：

系统性地发掘顶级设计者，越早越好
分配一个职业导师，为希望之星的发展负责，并谨慎地保持职业生涯
给成长的设计者提供机会，让他们跟其他人交互并互相刺激
这里面假定一些人已经有了成为好的设计者的潜力；所需要的工作只是诱导他们发展。Alan Perils有一个更简要的说法：“每个人都可以被教会如何雕刻，米开朗基罗只需要被教会怎么别去雕刻。伟大的程序员也一样。”Perils的意思是伟大的人有超越了训练的内在特质。但这些特质是从哪来的呢？是与生俱来的吗？还是靠勤奋培养的？就像Auguste Gusteau说的：“每个人都能烹饪，但只有无所畏惧的人才能伟大。”按照我的理解，关键在于将自己的大部分时间投入到刻意训练的意愿。但也许无所畏惧就是总结它的一种方式。或者像Gusteau的评论家Anton Ego说的：“不是每个人都能成为伟大的艺术家，但是一个伟大的艺术家可能来自任何地方。”

所以，可以继续，买下那本Java/Ruby/Javascript/PHP的书；你很可能会发现还是有点用处。但是它不能在24小时或者21天内改变你的生命，或者你的真正编程技巧。继续坚持持续提升24个月呢？很好，你现在正开始向某个地方前进了……