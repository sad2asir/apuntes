import{_ as d,a as m,b as h}from"./gantt_parallel-cc549e79.js";import{_ as b,r as a,o as y,c as g,b as t,a as e,w as n,d as s,f as l,e as i}from"./app-7f6f5727.js";const f={},v=e("h1",{id:"_1-2-concurrency",tabindex:"-1"},"1.2. Concurrency",-1),_={class:"table-of-contents"},w={href:"https://www.collinsdictionary.com/es/diccionario/ingles/concurrency",target:"_blank",rel:"noopener noreferrer"},A=i('<blockquote><p>Ccooperation or combination. Simultaneous occurrence; coincidence.</p></blockquote><p>If we change occurrence to <code>process</code>, we get a definition closer to its sense in the computer science.</p><p>This is not the first time the word <code>process</code> appears, that is because they are one of the most important concepts in programming.</p><h2 id="_1-2-1-concurrency-vs-parallelism" tabindex="-1">1.2.1. Concurrency vs Parallelism</h2><p>Now that we already know what a process is, let&#39;s look at its relationship with the hardware where they are run.</p><h3 id="monoprocess" tabindex="-1">Monoprocess</h3><p>Maybe we want to run many processes at the same time, but if we only have one processor unit, it&#39;s absolutely impossible to have more than one task running at the same time.</p><p>One possibility is to run the tasks in sequence. The system starts running one process and it doesn&#39;t start with the next one until the current task has completely finished. That is what happens in systems that are able to do one task at a time, something really strange nowadays.</p><p><img src="'+h+'" alt="Sequential execution of tasks (monoprocessor system)"></p>',9),k=e("h3",{id:"multitasking",tabindex:"-1"},"Multitasking",-1),S=e("p",null,"In a multiprogramming system there are one or more programs loaded in main memory which are ready to execute. Only one program at a time is able to get the CPU for executing its instructions while all the others are waiting their turn.",-1),x=e("p",null,"The main idea of multiprogramming is to maximize the use of CPU time. Indeed, suppose the currently running process is performing an I/O task (which, by definition, does not need the CPU to be accomplished). Then, the OS may interrupt that process and give the control to one of the other in-main-memory programs that are ready to execute (i.e. process context switching). It is said that running processes are multiplexed on time.",-1),P=e("p",null,[s("This way, the OS gives as the illusion that many processes are running simultaneously. That is commonly called "),e("code",null,"multitasking"),s(".")],-1),D=e("p",null,[e("img",{src:d,alt:"Concurrent execution of tasks (monoprocessor system)"})],-1),q=e("p",null,"On both previous images can be observed how the total CPU time to complete all processes is the same in both models. Nonetheless, on the second model the user has the sensation that all tasks are running at the same time.",-1),B=e("h3",{id:"parallelism",tabindex:"-1"},"Parallelism",-1),W=e("p",null,"Multiprocessing sometimes refers to executing multiple processes (programs) at the same time. This might be misleading because we have already introduced the term “multiprogramming” to describe that before. In fact, multiprocessing refers to the hardware (i.e., the CPU units) rather than the software (i.e., running processes). If the underlying hardware provides more than one processor then that is multiprocessing. Several variations on the basic scheme exist, e.g., multiple cores on one die or multiple dies in one package or multiple packages in one system. Anyway, a system can be both multiprogrammed by having multiple programs running at the same time and multiprocessing by having more than one physical processor.",-1),E=e("p",null,[s("Nowadays most devices, from desktop to laptops through mobile devices and IoT, all of them offer multiprocess capabilities, that is, they have mor than one processing unit to really do many tasks at the same time, no simulate it. This kind of execution is called "),e("code",null,"parallelism"),s(".")],-1),T=e("p",null,[e("img",{src:m,alt:"Parallel execution of tasks (dual processor system)"})],-1),C=i('<p>The bigger the processor units number is, the less time the tasks it takes to run and the user will have a better experience. This is one of the goals of operating systems, schedule properly the tasks to minimize running times, wait times and to maximize the resources use , mainly the processors.</p><div class="custom-container question"><p class="custom-container-title">cores vs threads</p><p>have you bought a microprocessor recently? Are you up-to-date in the state of the art of hardware? Then, you&#39;ll probably know that one of the main characteristics of a microprocessor are its <strong>cores number</strong> (4, 8, 16).</p><p>Moreover, the number of cores is completed with another configuration, <strong>treads number</strong>, that usually is twice the number of cores.</p><p>¿What is the relationship between processor threads and concurrency? ¿A computer system with 8 cores / 16 threads means that it can run up to 16 process in parallel?</p></div><h2 id="_1-2-2-distributed-systems" tabindex="-1">1.2.2. Distributed systems</h2><blockquote><p>&quot;A collection of independent computers that appears to its users as a single. coherent system&quot;</p><p>&quot;Andrew S. Tanembaum&quot;</p></blockquote><p>This definition has several important aspects:</p><ul><li>The first one is that a distributed system consists of components (i.e., computers) that are autonomous.</li><li>A second aspect is that users (people or programs) think they are dealing with a single system. This means that one way or the other the autonomous components need to collaborate. How to establish this collaboration lies at the heart of developing distributed systems</li></ul><p>The most known and famous example of distributed system is <code>the Internet</code>. The Internet is seen by the users as a single huge documents repository, that is, a single system able to provide almost any information or service. Notwithstanding the above, we know that is made up of millions of devices located all over the world and interconnected.</p><p>It began with the need to share resources. Actually the state-of-the-art on these systems are <code>Cloud Computing</code> or cloud services. It&#39;s said that a distributed system is where software components are distributed on a network and they communicate and coordinate with each other by using message passing.</p><p>Let&#39;s concentrate on important characteristics of distributed systems:</p><ul><li>Concurrency. Allows running multiple process in parallel.</li><li>Global watch independency. Implies synchronization using messaging.</li><li>Scalability: distributed systems should also be relatively easy to expand or scale. This characteristic is a direct consequence of having independent computers, but at the same time, hiding how these computers actually take part in the system as a whole.</li><li>Fault tolerance: A distributed system will normally be continuously available, although perhaps some parts may be temporarily out of order.</li></ul><h2 id="_1-2-3-advantages-and-disadvantages" tabindex="-1">1.2.3. Advantages and disadvantages</h2><p>Pros of parallel processing:</p><ul><li>Simultaneous running of tasks</li><li>Reduce total running time</li><li>Helps to solve big and complex problems</li><li>Use of non local resources on the network</li><li>Reduce expenses by taking advantage of shared resources. It&#39;s not necessary to invest on a supercomputer because it&#39;s possible to have the same processing power with smaller computers distributed</li></ul><p>Cons of parallel processing:</p>',14),F=e("li",null,"Compilers and development environments are more complex to develop.",-1),R=e("li",null,"Parallel programs are more difficult to write",-1),I=e("li",null,"Higher power consumption",-1),N=e("li",null,"Bigger data access complexity",-1),j=i('<p>Pros of distributed programming</p><ul><li>Resource &amp; data sharing</li><li>Scale under demand</li><li>Bigger flexibility to distribute processing load</li><li>High availability</li><li>Support for distributed applications</li><li>Open philosophy and heterogeneous development</li></ul><div class="custom-container question"><p class="custom-container-title">Scalability</p><p>Scalability means the possibility of increase the processing, storage, and capabilities of a system</p><p>Research about differences, pros and cons of <code>vertical scaling</code> vs <code>horizontal scaling</code>.</p></div><p>Cons of distributed programming</p><ul><li>Increase system complexity</li><li>New specialized software is needed</li><li>Communication problems (data lost, overflows, saturation, etc.)</li><li>Security problems, DDoS attacks</li></ul><p>Distributed and parallel programming examples</p><ul><li>Weather forecast analysis and research</li><li>Human genome research</li><li>Biosphere modelling</li><li>Seismic predictions</li><li>Molecule simulation</li></ul>',7),O={class:"custom-container info"},z=e("p",{class:"custom-container-title"},"Example of parallel and distributed programming",-1),M={href:"https://setiathome.berkeley.edu/sah_about.php",target:"_blank",rel:"noopener noreferrer"},H=i(`<h2 id="_1-2-4-bernstein-s-conditions" tabindex="-1">1.2.4. Bernstein&#39;s conditions</h2><p>Once we know what a concurrent program is and the different hardware architectures that support them, let&#39;s try to identify which program parts can be executed concurrently.</p><p>If we look at the following code we can determine that the first sentence must be run before the second one in order to get always the same result (for the same input data set).</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Though in the following code the order isn&#39;t important at all and doesn&#39;t change the final result (output data set). In this situation all of them cam be run at the same time increasing processing speed.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">2</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">z </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">3</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A.J. Bernstein’s Conditions are the conditions applied on two statements S1 and S2 that are to be executed in the processor. It states that three conditions that are explained below must be satisfied for two successive statements S<sub>i</sub> y S<sub>j</sub> to be executed concurrently and still produce the same result</p><p>Bernstein conditions are rely on the subsequent two sets of variables:</p><ul><li>R(S<sub>k</sub>) = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...} read set consists of all variables that are read during exceution of k statements set</li><li>W(S<sub>k</sub>) = {b<sub>1</sub>, b<sub>2</sub>, b<sub>3</sub>, ...} write set consists of all variables that are written (updated) during execution of k statements set.</li></ul><p>To run concurrently both statement sets S<sub>i</sub> y S<sub>j</sub> these three conditions must be matched simultaneously:</p><ul><li>R(S<sub>i</sub>) ∩ W(S<sub>j</sub>)</li><li>W(S<sub>i</sub>) ∩ R(S<sub>j</sub>)</li><li>W(S<sub>i</sub>) ∩ W(S<sub>j</sub>)</li></ul><div class="custom-container question"><p class="custom-container-title">Which of these instructions can be run concurrently?</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">a </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> y</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">b </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> z </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">c </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> a </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> b</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">w </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> c </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>First of all we must get L &amp; E sets for each sentence</p><blockquote><p>R(S<sub>1</sub>) = {x, y}</p><p>W(S<sub>1</sub>) = {a}</p></blockquote><blockquote><p>R(S<sub>2</sub>) = {z}</p><p>W(S<sub>2</sub>) = {b}</p></blockquote><blockquote><p>R(S<sub>3</sub>) = {a, b}</p><p>W(S<sub>3</sub>) = {c}</p></blockquote><blockquote><p>R(S<sub>4</sub>) = {c}</p><p>W(S<sub>4</sub>) = {w}</p></blockquote><p>And now let&#39;s apply the rules for each pair of sentences</p><blockquote><p>R(S<sub>1</sub>) ∩ W(S<sub>2</sub>) = ∅</p><p>W(S<sub>1</sub>) ∩ R(S<sub>2</sub>) = ∅</p><p>W(S<sub>1</sub>) ∩ W(S<sub>2</sub>) = ∅ // They can be run simultaneously</p></blockquote><blockquote><p>R(S<sub>1</sub>) ∩ W(S<sub>3</sub>) = ∅</p><p>W(S<sub>1</sub>) ∩ R(S<sub>3</sub>) = {a} ≠ ∅</p><p>W(S<sub>1</sub>) ∩ W(S<sub>3</sub>) = ∅ // NO parallelism without problems</p></blockquote><blockquote><p>R(S<sub>1</sub>) ∩ W(S<sub>4</sub>) = ∅</p><p>W(S<sub>1</sub>) ∩ R(S<sub>4</sub>) = ∅</p><p>W(S<sub>1</sub>) ∩ W(S<sub>4</sub>) = ∅ // They can be run simultaneously</p></blockquote><blockquote><p>R(S<sub>2</sub>) ∩ W(S<sub>3</sub>) = ∅</p><p>W(S<sub>2</sub>) ∩ R(S<sub>3</sub>) = {b] ≠ ∅</p><p>W(S<sub>2</sub>) ∩ W(S<sub>3</sub>) = ∅ // NO parallelism without problems</p></blockquote><blockquote><p>R(S<sub>2</sub>) ∩ W(S<sub>4</sub>) = ∅</p><p>W(S<sub>2</sub>) ∩ R(S<sub>4</sub>) = ∅</p><p>W(S<sub>2</sub>) ∩ W(S<sub>4</sub>) = ∅ // They can be run simultaneously</p></blockquote><blockquote><p>R(S<sub>3</sub>) ∩ W(S<sub>4</sub>) = ∅</p><p>W(S<sub>3</sub>) ∩ R(S<sub>4</sub>) = {c} ≠ ∅</p><p>W(S<sub>3</sub>) ∩ W(S<sub>4</sub>) = ∅ // NO parallelism without problems</p></blockquote>`,24);function U(V,L){const c=a("DownloadPDF-component"),p=a("DocumentCover-component"),o=a("router-link"),r=a("ExternalLinkIcon"),u=a("Badge");return y(),g("div",null,[t(c),t(p,{titulo:"1.2. Concurrency"}),v,e("nav",_,[e("ul",null,[e("li",null,[t(o,{to:"#_1-2-1-concurrency-vs-parallelism"},{default:n(()=>[s("1.2.1. Concurrency vs Parallelism")]),_:1}),e("ul",null,[e("li",null,[t(o,{to:"#monoprocess"},{default:n(()=>[s("Monoprocess")]),_:1})]),e("li",null,[t(o,{to:"#multitasking"},{default:n(()=>[s("Multitasking")]),_:1})]),e("li",null,[t(o,{to:"#parallelism"},{default:n(()=>[s("Parallelism")]),_:1})])])]),e("li",null,[t(o,{to:"#_1-2-2-distributed-systems"},{default:n(()=>[s("1.2.2. Distributed systems")]),_:1})]),e("li",null,[t(o,{to:"#_1-2-3-advantages-and-disadvantages"},{default:n(()=>[s("1.2.3. Advantages and disadvantages")]),_:1})]),e("li",null,[t(o,{to:"#_1-2-4-bernstein-s-conditions"},{default:n(()=>[s("1.2.4. Bernstein's conditions")]),_:1})])])]),e("p",null,[s("According to the "),e("a",w,[s("Collins dictionary"),t(r)]),s(" some of the senses os the word concurrency are")]),A,l(`
\`\`\`mermaid
gantt
title Sequential execution of tasks (monoprocessor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1       :done, t1, 0, 4s
Process 2     : active, t2, after t1, 5s
Process 3     : crit, t3, after t2, 2s
Process 4    : t4, after t3, 5s
\`\`\`
`),k,S,x,P,D,l(`
\`\`\`mermaid
gantt
title Concurrent execution of tasks (monoprocessor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1  :done, t1, 0, 2s
Process 2  :active, t2, after t1, 2s
Process 3  :crit, t3, after t2, 2s
Process 4  : t4, after t3, 1s
Process 1  :done, t5, after t4, 2s
Process 2  :active, t6, after t5, 1s
Process 4  : t7, after t6, 3s
Process 2  :active, t8, after t7, 2s
Process 4  : t9, after t8, 1s
\`\`\`
`),q,B,W,E,T,l(`
\`\`\`mermaid
gantt
title Parallel execution of tasks (dual processor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1  :done, t1, 0, 2s
Process 2  :active, t2, after t1, 2s
Process 1  :done, t5, after t2, 2s
Process 2  :active, t6, after t5, 1s
Process 2  :active, t8, after t6, 2s
section Processor 2
Process 3  :crit, t3, 0, 2s
Process 4  : t4, after t3, 1s
Process 4  : t7, after t4, 3s
Process 4  : t9, after t7, 1s
\`\`\`
`),C,e("ul",null,[F,R,I,N,e("li",null,[s("High communication and synchronization complexity on subtasks "),t(u,{type:"danger",text:"warning",vertical:"middle"})])]),j,e("div",O,[z,e("p",null,[e("a",M,[s("Allien intelligence research- SETI Project"),t(r)])])]),H])}const K=b(f,[["render",U],["__file","concurrency.html.vue"]]);export{K as default};
