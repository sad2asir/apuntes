import{_ as p,a as d,b as u,c as m,d as y}from"./threads_vs_process-5db8950b.js";import{_ as A,r as l,o as v,c as g,b as s,a as e,w as o,d as a,e as r}from"./app-770d793e.js";const b={},h=e("h1",{id:"_1-1-procesos-programas-hilos",tabindex:"-1"},"1.1. Procesos, Programas, hilos",-1),E={class:"table-of-contents"},f=r('<h2 id="_1-1-1-procesos-y-programas" tabindex="-1">1.1.1. Procesos y programas</h2><p>Un <code>programa</code> no es más que un conjunto de instrucciones u órdenes que le indican a un dispositivo qué acciones debe realizar con los datos recibidos.</p><div class="custom-container tip"><p class="custom-container-title">Caja negra</p><p>Según la visión de un sistema como caja negra, un programa le indica al sistema cómo obtener unos datos de salida a partir de unos datos de entrada.</p></div><p>Sin embargo, un <code>proceso</code> es un programa en ejecución. Esto es, un proceso es una entidad activa y un programa es una entidad pasiva.</p><p>El proceso, por tanto, está representado por el contador del programa, el valor de los registros, la pila, el <em>código ejecutable</em>, su estado, ... todo lo necesario para la ejecución del programa por parte del SO.</p><p><img src="'+p+'" alt="Proceso en memoria"></p><p>Cada proceso es una entidad independiente. Cuando un programa se ejecuta, el sistema operativo crea un proceso. Si ese mismo programa se vuelve a ejecutar, se crearía un proceso distinto, teniendo en memoria dos instancias del mismo programa. Pero es importante recalcar que los dos procesos son independientes.</p><h2 id="_1-1-2-programacion-concurrente" tabindex="-1">1.1.2. Programación concurrente</h2><p>Podemos decir que dos procesos son concurrentes cuando la primera instrucción de uno de los procesos se ejecuta después de la primera y antes de la última de otro proceso.</p><p>La planificación alternando los instantes de ejecución, <code>multitarea</code>, hace que los procesos se ejecuten de forma concurrente. También la disponibilidad de varias unidades de proceso, <code>multiproceso</code>, permite la ejecución simultánea o paralela de procesos en el sistema.</p><p><img src="'+d+'" alt="Concurrencia vs paralelismo"></p><div class="custom-container tip"><p class="custom-container-title">Concurrencia</p><p>A los dos escenarios descritos anteriormente es a lo que vamos a denominar, de forma general, <strong>concurrencia</strong>.</p></div><h3 id="¿para-que" tabindex="-1">¿Para qué?</h3><p>Las principales razones por las que se utiliza una estructura concurrente son:</p><ul><li>Optimizar la utilización de los recursos: Podremos simultanear las operaciones de E/S en los procesos. La CPU estará menos tiempo ociosa.</li><li>Proporcionar interactividad a los usuarios (y animación gráfica).</li><li>Mejorar la disponibilidad: Servidor que no realice tareas de forma concurrente, no podrá atender peticiones de clientes simultáneamente.</li><li>Conseguir un diseño conceptualmente más comprensible y mantenible: El diseño concurrente de un programa nos llevará a una mayor modularidad y claridad.</li><li>Aumentar la protección: Tener cada tarea aislada en un proceso permitirá depurar la seguridad de cada proceso y poder finalizarlo en caso de mal funcionamiento sin que suponga la caída del sistema.</li></ul><p>Además, los actuales avances tecnológicos hacen necesario tener en cuenta la concurrencia en el diseño de las aplicaciones para aprovechar su potencial. Los nuevos entornos hardware son:</p><ul><li>Microprocesadores con múltiples núcleos que comparten la memoria principal del sistema.</li><li>Entornos multiprocesador con memoria compartida.</li><li>Entornos distribuidos y servicios cloud.</li></ul><h3 id="comunicacion-y-sincronizacion-entre-procesos" tabindex="-1">Comunicación y sincronización entre procesos</h3><p>Cuando varios procesos se ejecutan concurrentemente puede haber procesos que colaboren para un determinado fin mientras que puede haber otros que compitan por los recursos del sistema.</p><p>En ambos casos se hace necesaria la introducción de mecanismos de comunicación y sincronización entre procesos.</p><div class="custom-container info"><p class="custom-container-title">Programación concurrente</p><p>Precisamente del estudio de esos <strong>mecanismos de sincronización y comunicación</strong> trata la programación concurrente y este módulo de PSP.</p></div><p>Si pensamos en la forma en la que un proceso puede comunicarse con otro, se nos plantean estas dos:</p><ul><li>Intercambio de mensajes: Es la forma que se utiliza habitualmente cuando los procesos se encuentran en máquinas diferentes. Los procesos intercambian información siguiendo un protocolo previamente establecido.</li><li>Recursos (o memoria) compartidos: Sólo se puede utilizar cuando los dos procesos se encuentran en la misma máquina y permite la sincronización de los procesos en función del valor o estado de un recurso compartido.</li></ul><p>También podemos ver el tipo de comunicación en función de la sincronía que mantengan los procesos durante la comunicación:</p><ul><li>Síncrona: El emisor queda bloqueado hasta que el receptor recibe el mensaje. Ambos se sincronizan en el momento de la recepción del mensaje.</li><li>Asíncrona: El emisor continúa con su ejecución inmediatamente después de emitir el mensaje, sin quedar bloqueado.</li></ul><h2 id="_1-1-3-servicios-e-hilos" tabindex="-1">1.1.3. Servicios e hilos</h2><p>Un programa, como ya hemos dicho, se compone de un conjunto de sentencias (operaciones y verificaciones) y un flujo de ejecución. La línea de flujo de control establece, de acuerdo con la estructura del propio programa y de los datos que maneja, el orden en que deben ejecutarse las sentencias.</p><p>Atendiendo al número de líneas de flujo de control que tiene un programa, los procesos pueden ser:</p><ul><li>Secuenciales: Poseen un único flujo de control (monohilo)</li><li>Concurrentes: Poseen varios hilos de ejecución (multihilo).</li></ul><h3 id="programa-secuencial-arquitectura-von-newmann" tabindex="-1">Programa secuencial (Arquitectura Von Newmann)</h3><p>Cuando empezamos a programar, usamos el estilo de programación clásico, en el que se sigue el modelo conceptual de Von Newmann</p><p>Los programas secuenciales presentan una línea simple de control de flujo. Las operaciones de este tipo de programas están estrictamente ordenados como una secuencia temporal lineal.</p><p>El comportamiento del programa es solo función de la naturaleza de las operaciones individuales que constituye el programa y del orden en que se ejecutan (determinado por el conjunto de entradas que recibe).</p><p>En los programas secuenciales, el tiempo que tarda cada operación en ejecutarse no tiene consecuencias sobre el resultado.</p><p><img src="'+u+'" alt="Sequential flowchat example"></p><p>La comprobación del correcto funcionamiento (<code>verificación</code> o <code>depuración</code>) de un programa secuencial es sencilla:</p><ul><li>Cada sentencia produce la respuesta correcta.</li><li>Las sentencias se ejecutan en el orden esperado.</li></ul><p>De aquí surgen algunos de los métodos básicos de pruebas de sistemas, como el de <em>caja blanca</em>.</p><h3 id="programa-concurrente" tabindex="-1">Programa concurrente</h3><p>En los programas concurrentes existen múltiples líneas de control de flujo. Las sentencias que constituyen el programa no se ejecutan siguiendo un órden que corresponda a una secuencia temporal lineal.</p><p>En los programas concurrentes el concepto de secuencialidad entre sentencias continua siendo muy importante. Sin embargo en los programas concurrentes es de orden parcial, mientras que, tal y como hemos comentado anteriormente, en los programas secuenciales era de orden estricto.</p><p><img src="'+m+`" alt="Concurrent flowchat example"></p><p>En los programas concurrentes la <em>secuencialización</em> entre procesos concurrentes se llama <strong>sincronización</strong>.</p><p>Este orden parcial implica que los programas concurrentes no tienen porqué ser deterministas, es decir, que ante el mismo conjunto de datos de entrada no siempre se va a obtener el mismo resultado.</p><div class="custom-container danger"><p class="custom-container-title">Indeterminismo</p><p>Que existan diferentes salidas para el mismo conjunto de datos de entrada no significa necesariamente que un programa concurrente sea incorrecto.</p></div><p>Si observamos el siguiente ejemplo de pseudocódigo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">TestClass</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> x</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> i</span><span style="color:#39ADB5;">=</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">&lt;=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> i</span><span style="color:#39ADB5;">++)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            x</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> j</span><span style="color:#39ADB5;">=</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> j </span><span style="color:#39ADB5;">&lt;=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">5</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> j</span><span style="color:#39ADB5;">++)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            x</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">sequential</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">x</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">parallel</span><span style="color:#39ADB5;">()</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// cobegin-coend means that both methods are run simultaneously</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// These sentences doesn&#39;t exist in Java. They are used for </span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// sample purposes</span></span>
<span class="line"><span style="color:#90A4AE;">        cobegin</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#6182B8;">testMethod1</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#6182B8;">testMethod2</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">        coend</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">x</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container question"><p>¿Qué valor tendrá x tras ejecutar el método sequential?</p><p>¿Qué valor tendrá x tras ejecutar el método parallel?</p></div><div class="custom-container info"><p class="custom-container-title">Reseña histórica</p><p>La naturaleza y los modelos de interacción entre procesos de un programa concurrente fueron estudiados y descritos por <strong>Dijkstra</strong> (1968), Brinch <strong>Hansen</strong> (1973) y <strong>Hoare</strong> (1974).</p><p>Estos trabajos constituyeron los principios en que se basaron los sistemas operativos multiproceso de la década de los 70 y 80.</p></div><p>El indeterminismo inherente a los programas concurrentes hace que su análisis y validación sea más complejo. No obstante, para la comprobación del correcto funcionamiento (<code>verificación</code> o <code>depuración</code>) de un programa concurrente se requiere comprobar los mismos aspectos que en los programas secuenciales, pero con los siguientes nuevos aspectos:</p>`,50),D=e("li",null,"Las sentencias se pueden validar individualmente solo si no están acopladas por variables compartidas.",-1),B=e("li",null,[a("Siempre que la secuencialidad entre tareas se lleve a cabo por sentencias explícitas de "),e("strong",null,"sincronización"),a(", el tiempo es un elemento que no influye sobre el resultado")],-1),q=r('<div class="custom-container warning"><p class="custom-container-title">Importante</p><p>Estos tres aspectos que se acaban de describir forman la base de toda la programación concurrente.</p><p>👁️ Conocerlos, entenderlos y saber aplicarlos es a lo que dedicaremos una parte importante de este curso.</p></div><h3 id="hilos-vs-procesos" tabindex="-1">Hilos vs procesos</h3><p>Un hilo no es más que cada una de esas líneas de flujo que puede tener un proceso ejecutándose de forma concurrente. Un procesos es una unidad pesada de ejecución.</p><p>Así, un proceso estará formado por, al menos, un hilo de ejecución, el hilo principal. Si el proceso tiene varios hilos, cada uno es una unidad de ejecución ligera.</p><table><thead><tr><th style="text-align:left;">Procesos</th><th style="text-align:left;">Hilos</th></tr></thead><tbody><tr><td style="text-align:left;">Constan de uno o más hilos</td><td style="text-align:left;">Un hilo siempre existe dentro de un proceso</td></tr><tr><td style="text-align:left;">Son independientes unos de otros</td><td style="text-align:left;">Comparten los recursos del proceso de forma directa</td></tr><tr><td style="text-align:left;">Son gestionados por el SO</td><td style="text-align:left;">Son gestionados por el proceso</td></tr><tr><td style="text-align:left;">Se comunican a través del SO</td><td style="text-align:left;">La comunicación la controla el proceso</td></tr></tbody></table><p><img src="'+y+'" alt="Threads vs Processes"></p><p>En la imagen anterior se puede observar la relación existente entre la creación de un thread y la de su proceso asociado.</p><ul><li>El proceso define un espacio de memoria en el que reside. Los hilos comparten ese espacio de memoria. Dentro de ese espacio de memoria cada hilo tiene su espacio reservado, pero todos pueden compartir la memoria global del proceso y los recursos (ficheros, sockets, etc.) que el proceso tenga abiertos.</li><li>Como ya hemos visto, cada proceso tiene su PCB con información relativa al proceso.</li><li>Los hilos, de forma similar, tienen su TCB (Thread Control Block) en el que guardan la información específica de cada hilo (Contador de programa, puntero a la pila, estado del thread, registros y un puntero al PCB).</li></ul><div class="custom-container info"><p class="custom-container-title">Servicios</p><p>Un servicio es un proceso que, normalmente, es cargado durante el arranque del sistema operativo. Al no necesitar interacción con el usuario, los servicios suelen ejecutarse en forma de *<em>demonios</em>, quedan su ejecución en <em>segundo plano</em>.</p><p>Recibe el nombre de servicio ya que es un proceso que queda a la espera de que otro le pida que realice una tarea. Como deben atender las solicitudes de varios procesos, los servicios suelen ser programas multihilo.</p></div>',9);function _(j,x){const i=l("DownloadPDF-component"),c=l("DocumentCover-component"),n=l("router-link"),t=l("Badge");return v(),g("div",null,[s(i),s(c,{titulo:"1.1. Procesos, programas, hilos"}),h,e("nav",E,[e("ul",null,[e("li",null,[s(n,{to:"#_1-1-1-procesos-y-programas"},{default:o(()=>[a("1.1.1. Procesos y programas")]),_:1})]),e("li",null,[s(n,{to:"#_1-1-2-programacion-concurrente"},{default:o(()=>[a("1.1.2. Programación concurrente")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#¿para-que"},{default:o(()=>[a("¿Para qué?")]),_:1})]),e("li",null,[s(n,{to:"#comunicacion-y-sincronizacion-entre-procesos"},{default:o(()=>[a("Comunicación y sincronización entre procesos")]),_:1})])])]),e("li",null,[s(n,{to:"#_1-1-3-servicios-e-hilos"},{default:o(()=>[a("1.1.3. Servicios e hilos")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#programa-secuencial-arquitectura-von-newmann"},{default:o(()=>[a("Programa secuencial (Arquitectura Von Newmann)")]),_:1})]),e("li",null,[s(n,{to:"#programa-concurrente"},{default:o(()=>[a("Programa concurrente")]),_:1})]),e("li",null,[s(n,{to:"#hilos-vs-procesos"},{default:o(()=>[a("Hilos vs procesos")]),_:1})])])])])]),f,e("ul",null,[D,e("li",null,[a("Cuando existen variables compartidas, los efectos de interferencia entre las sentencias concurrentes pueden ser muy variados y la validación es muy difícil. "),s(t,{type:"danger",text:"cuidado",vertical:"middle"})]),B]),q])}const S=A(b,[["render",_],["__file","process.html.vue"]]);export{S as default};
