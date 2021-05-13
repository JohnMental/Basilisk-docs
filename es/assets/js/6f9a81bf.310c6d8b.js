(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return p}));var a=r(3),t=r(7),o=(r(0),r(93)),s=r(94),i={id:"node_monitoring",title:"Monitoreo de nodo"},c={unversionedId:"node_monitoring",id:"node_monitoring",isDocsHomePage:!1,title:"Monitoreo de nodo",description:"En este cap\xedtulo, lo guiaremos a trav\xe9s de la configuraci\xf3n del monitoreo local para su nodo validador.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/node_monitoring.md",slug:"/node_monitoring",permalink:"/es/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",version:"current",sidebar:"sidebar",previous:{title:"Benchmark de desempe\xf1o",permalink:"/es/performance_benchmark"},next:{title:"Configura una Cadena para desarrolladores.",permalink:"/es/build_dev_chain"}},l=[{value:"Pre-requisitos",id:"prerequisites",children:[]},{value:"Configuraci\xf3n de Prometheus",id:"prometheus-setup",children:[{value:"Usuario y directorios",id:"user-and-directories",children:[]},{value:"Instalar Prometheus",id:"install-prometheus",children:[]},{value:"Iniciando Prometheus",id:"starting-prometheus",children:[]}]},{value:"Exportador de nodor",id:"node-exporter",children:[{value:"Instalar Node Exporter",id:"install-node-exporter",children:[]},{value:"Crear un servicio Systemd",id:"create-a-systemd-service",children:[]},{value:"A\xf1ade Scrape Job para Node Exporter",id:"add-scrape-job-for-node-exporter",children:[]}]},{value:"Grafana Configuraci\xf3n",id:"grafana-setup",children:[{value:"Instalar Grafana",id:"install-grafana",children:[]},{value:"Acceder a la interfaz web",id:"accessing-the-web-interface",children:[]},{value:"Configuraci\xf3n de la fuente de datos",id:"configuring-the-datasource",children:[]},{value:"Importando the Dashboard",id:"importing-the-dashboard",children:[]}]}],u={toc:l};function p(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"En este cap\xedtulo, lo guiaremos a trav\xe9s de la configuraci\xf3n del monitoreo local para su nodo validador."),Object(o.b)("h2",{id:"prerequisites"},"Pre-requisitos"),Object(o.b)("p",null,"Debe tener su ",Object(o.b)("a",{parentName:"p",href:"/node_setup"},"Nodo validador")," en funcionamiento.",Object(o.b)("br",{parentName:"p"}),"\n","Esta gu\xeda se prob\xf3 en la versi\xf3n Ubuntu 20.04 LTS."),Object(o.b)("h2",{id:"prometheus-setup"},"Configuraci\xf3n de Prometheus"),Object(o.b)("p",null,"En el primer paso, configuraremos el servidor Prometheus."),Object(o.b)("h3",{id:"user-and-directories"},"Usuario y directorios"),Object(o.b)("p",null,"Creamos un usuario solo para fines de monitoreo que no tiene un directorio de inicio y no se puede usar para iniciar sesi\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),Object(o.b)("p",null,"Luego creamos directorios para el ejecutable y el archivo de configuraci\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),Object(o.b)("p",null,"Cambie la propiedad de los directorios para restringirlos a nuestro nuevo usuario de monitoreo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),Object(o.b)("h3",{id:"install-prometheus"},"Instalar Prometheus"),Object(o.b)("p",null,"Consulte el n\xfamero de versi\xf3n m\xe1s reciente de Prometheus en ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub release page"),".",Object(o.b)("br",{parentName:"p"}),"\n","En el momento de escribir este art\xedculo es la v2.25.2. Inserte la \xfaltima versi\xf3n de lanzamiento en los siguientes comandos."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),Object(o.b)("p",null,"Ahora copie los binarios en la carpeta local."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),Object(o.b)("p",null,"Ahora necesitamos asignar esos binarios a nuestro usuario reci\xe9n creado."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),Object(o.b)("p",null,"A continuaci\xf3n, copiaremos la interfaz web y los ajustes preestablecidos de configuraci\xf3n.."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),Object(o.b)("p",null,"Y Puede que ya lo hayas adivinado, pero tambi\xe9n estamos cambiando la propiedad de esos directorios."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),Object(o.b)("p",null,"Ahora tenemos todo lo que necesitamos del paquete descargado, as\xed que daremos un paso atr\xe1s y realizaremos una limpieza."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),Object(o.b)("p",null,"Creemos un archivo de configuraci\xf3n ",Object(o.b)("inlineCode",{parentName:"p"},"YAML")," para Prometheus con el editor de su elecci\xf3n (nano / vim / pico)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(o.b)("p",null,"Nuestra configuraci\xf3n se divide en tres secciones:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"global"),": establece los valores predeterminados para ",Object(o.b)("inlineCode",{parentName:"li"},"scrape_interval")," y el intervalo de ejecuci\xf3n de reglas con `Evaluation_interval\xb4"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rule_files"),": especifica los archivos de reglas que el servidor Prometheus debe cargar"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scrape_configs"),": aqu\xed es donde configuras los recursos de monitoreo")),Object(o.b)("p",null,"Lo mantendremos muy b\xe1sico y terminaremos con algo como esto:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),Object(o.b)("p",null,"El primer trabajo de scrape exporta datos del propio Prometheus, el segundo exporta las m\xe9tricas del nodo HydraDX.\nAjustamos el ",Object(o.b)("inlineCode",{parentName:"p"},"scrape_interval")," de ambos trabajos para obtener estad\xedsticas m\xe1s detalladas. Esto anula los valores globales.\nEl ",Object(o.b)("inlineCode",{parentName:"p"},"target")," en",Object(o.b)("inlineCode",{parentName:"p"}," static_configs")," establece d\xf3nde se ejecutan los exportadores, aqu\xed nos ce\xf1imos a los puertos predeterminados."),Object(o.b)("p",null,"Despu\xe9s de guardar la configuraci\xf3n, cambiaremos, una vez m\xe1s, la propiedad."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),Object(o.b)("h3",{id:"starting-prometheus"},"Iniciando Prometheus"),Object(o.b)("p",null,"Para que Prometheus se inicie autom\xe1ticamente y se ejecute en segundo plano, usaremos ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),".\nCree una nueva configuraci\xf3n (nuevamente con el editor de su elecci\xf3n):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),Object(o.b)("p",null,"Pegue la siguiente configuraci\xf3n y guarde el archivo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),Object(o.b)("p",null,"A continuaci\xf3n realizaremos los siguientes tres pasos:\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," carga nuevas configuraciones y actualiza las existentes\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl enable")," activa nuestro nuevo servicio\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl start")," desencadena la ejecuci\xf3n del servicio"),Object(o.b)("p",null,"Puede realizar los pasos anteriores en un comando ejecutando:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),Object(o.b)("p",null,"Ahora deber\xeda poder acceder a la interfaz web de Prometheus en http://localhost:9090/."),Object(o.b)("h2",{id:"node-exporter"},"Exportador de nodor"),Object(o.b)("p",null,"Instalaremos Node Exporter para extraer las m\xe9tricas del servidor que se utilizar\xe1n en el panel.\nCompruebe el n\xfamero de versi\xf3n de la \xfaltima versi\xf3n. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"Aqui")," y actualice el comando.",Object(o.b)("br",{parentName:"p"}),"\n","En el momento de redactar este art\xedculo, la \xfaltima versi\xf3n estaba ",Object(o.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(o.b)("h3",{id:"install-node-exporter"},"Instalar Node Exporter"),Object(o.b)("p",null,"Descargue la \xfaltima versi\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(o.b)("p",null,"Desempaquete el archivo que acaba de descargar. Esto crear\xe1 una carpeta llamada ",Object(o.b)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(o.b)("p",null,"A continuaci\xf3n, copiamos el binario en nuestro directorio de aplicaciones local y lo asignamos a nuestro usuario de monitoreo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),Object(o.b)("p",null,"Ahora podemos hacer una limpieza y eliminar el paquete descargado y descomprimido."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),Object(o.b)("h3",{id:"create-a-systemd-service"},"Crear un servicio Systemd"),Object(o.b)("p",null,"Al igual que prometheus, queremos que Node Exporter tambi\xe9n se ejecute como un servicio.\nCree un servicio systemd con su editor de elecci\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),Object(o.b)("p",null,"Y pega la siguiente configuraci\xf3n en \xe9l."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),Object(o.b)("p",null,"Ahora activaremos e iniciaremos el servicio con este resumen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),Object(o.b)("h3",{id:"add-scrape-job-for-node-exporter"},"A\xf1ade Scrape Job para Node Exporter"),Object(o.b)("p",null,"El Exportador de nodos ya est\xe1 en funcionamiento, pero debemos decirle a Prometheus que extraiga sus datos.\nAbriremos el archivo de configuraci\xf3n una vez m\xe1s con el editor que elijamos."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(o.b)("p",null,"Y en la parte inferior del archivo, agregaremos una configuraci\xf3n de scrape m\xe1s.\nPegue el siguiente contenido y guarde el archivo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),Object(o.b)("p",null,"Para aplicar la configuraci\xf3n de cambios, es necesario reiniciar el servicio Prometheus."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),Object(o.b)("p",null,"Las m\xe9tricas de su servidor ahora se raspan y se pueden encontrar en la interfaz web de Prometheus.\nLos necesitaremos m\xe1s tarde para nuestro tablero."),Object(o.b)("h2",{id:"grafana-setup"},"Grafana Configuraci\xf3n"),Object(o.b)("p",null,"Podemos ver nuestras m\xe9tricas en la interfaz web, pero no es as\xed como queremos monitorearlas.\nLo queremos bonito y bonito. Ah\xed es donde entra en juego Grafana."),Object(o.b)("h3",{id:"install-grafana"},"Instalar Grafana"),Object(o.b)("p",null,"Compruebe cu\xe1l es la \xfaltima versi\xf3n de Grafana ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"con este link"),".",Object(o.b)("br",{parentName:"p"}),"\n",'Puede cambiar el n\xfamero de versi\xf3n en los siguientes comandos o copiar los comandos de instalaci\xf3n directamente desde el enlace.\nEn el momento de escribir este art\xedculo, la \xfaltima versi\xf3n era "7.5.1".'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),Object(o.b)("p",null,"El paquete viene con un servicio ",Object(o.b)("inlineCode",{parentName:"p"},"systemd")," incorporado que configuraremos e iniciaremos como el servicio Prometheus."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),Object(o.b)("h3",{id:"accessing-the-web-interface"},"Acceder a la interfaz web"),Object(o.b)("p",null,"Podremos abrir la interfaz web de Grafana en http://localhost:3000/.",Object(o.b)("br",{parentName:"p"}),"\n","El inicio de sesi\xf3n predeterminado de Grafana es:\nUser: ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),Object(o.b)("br",{parentName:"p"}),"\n","Password: ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),"  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-home.png")})),Object(o.b)("h3",{id:"configuring-the-datasource"},"Configuraci\xf3n de la fuente de datos"),Object(o.b)("p",null,'Haga clic en el engranaje de configuraci\xf3n en el men\xfa y seleccione fuentes de datos.\nEn la siguiente ventana, haga clic en "Agregar fuente de datos" y seleccione "Prometheus"..  '),Object(o.b)("p",null,"En el siguiente formulario, no necesita cambiar nada m\xe1s que la URL.\nColocar",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9090/")," y clic ",Object(o.b)("inlineCode",{parentName:"p"},"Save and Test"),".  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-datasource.png")})),Object(o.b)("h3",{id:"importing-the-dashboard"},"Importando the Dashboard"),Object(o.b)("p",null,"Por favor presione el bonton ",Object(o.b)("inlineCode",{parentName:"p"},"Plus"),"en la navegacion principal y selecciona ",Object(o.b)("inlineCode",{parentName:"p"},"import"),".  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import.png")})),Object(o.b)("p",null,"Nosotros usaremos el ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," y para cargarlo, simplemente ingrese el id ",Object(o.b)("inlineCode",{parentName:"p"},"14158")," y presione el bot\xf3n ",Object(o.b)("inlineCode",{parentName:"p"},"Load"),".  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import-options.png")})),Object(o.b)("p",null,"No necesita mucha configuraci\xf3n aqu\xed, solo aseg\xfarese de que Prometheus se use como fuente de datos.\nAhora puede finalizar la importaci\xf3n."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-dashboard.png")})),Object(o.b)("p",null,"Ahora deber\xeda ver su panel de control de inmediato.\nSi algunos paneles est\xe1n vac\xedos, aseg\xfarese de que su selecci\xf3n sobre los paneles sea as\xed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100  ")))}p.isMDXComponent=!0},93:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var a=r(0),t=r.n(a);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=t.a.createContext({}),u=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?t.a.createElement(m,i(i({ref:n},l),{},{components:r})):t.a.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},94:function(e,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return s}));var a=r(16),t=r(95);function o(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,a){var o=void 0===a?{}:a,s=o.forcePrependBaseUrl,i=void 0!==s&&s,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(t.b)(r))return r;if(i)return n+r;var u=r.startsWith(n)?r:n+r.replace(/^\//,"");return l?e+u:u}(o,r,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},95:function(e,n,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function t(e){return void 0!==e&&!a(e)}r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return t}))}}]);