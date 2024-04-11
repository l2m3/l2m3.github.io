"use strict";(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[308],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5190:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(8168),i=(n(6540),n(5680));const r={title:"L2M3",sidebar_label:"L2M3"},o=void 0,s={unversionedId:"index",id:"index",title:"L2M3",description:"Large language models (LLMs) have significantly impacted various scientific fields.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/l2m3/l2m3.github.io/edit/main/docs/index.mdx",tags:[],version:"current",lastUpdatedAt:1712823679,formattedLastUpdatedAt:"4/11/2024",frontMatter:{title:"L2M3",sidebar_label:"L2M3"}},c=[{value:"References",id:"references",children:[],level:3},{value:"Sponsors",id:"sponsors",children:[],level:2}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Large language models (LLMs) have significantly impacted various scientific fields.\nThis has led to special issues on AI in science being published by major scientific journals (e.g., Science 381 (6654) 2023).\nOur organizing committee and participants have played a crucial role in this movement by exploring the applications of LLMs in chemistry and materials science and contributing to the development of open-source solutions."),(0,i.yg)("p",null,"For example, it has been demonstrated that LLMs can be fine-tuned to achieve impressive performance on chemistry and materials science benchmarks ","[1\u20134]",".\nSome have even provided LLMs with access to external tools like Google Search and cloud robotics, enabling automated chemical synthesis.\nHowever, this has raised safety concerns ","[5,6]","."),(0,i.yg)("p",null,'Despite the rapid advances and attention to this field, a fundamental question remains: "What is hype, and what is reality?"\nIn a recent hackathon ',"[7]",", we organized over 150 participants to build prototypes to better understand the potential applications of LLMs in chemistry and materials science.\nThis collaborative effort has brought forth several open questions that require intense collaboration across the community."),(0,i.yg)("p",null,"What are the safety and dual-use concerns?\nHow can we assess and mitigate them? Some prominent figures have raised serious warnings about the potentially devastating impacts of such models, while others have dismissed these concerns as exaggerated."),(0,i.yg)("p",null,"How should we approach the use of LLMs in science, particularly in chemistry and materials science?\nThere are several challenges associated with using LLMs in a scientific setting. Many powerful models, such as GPT-4, have been trained by for-profit companies on proprietary data, making it difficult to evaluate them scientifically.\nAdditionally, the evolving nature of these systems and the lack of systematic evaluations pose further obstacles.\nFor example, one of the biggest benchmark suites for LLMs, BIG-bench (maintained by Google), contains only two (superficial) chemistry tests."),(0,i.yg)("p",null,"Furthermore, the role of academic research is being questioned due to the limited access to computational resources, which are predominantly available to a few industrial players."),(0,i.yg)("p",null,"How can we maximize the benefits of these models?\nWhat does our community require to leverage these advancements effectively? Most applications of LLMs in chemistry and materials science are still in the prototype or demo stage.\nThere is no consensus on the most promising applications in the short, medium, and long term. Moreover, there is a lack of agreement on the necessary changes in science governance, safety measures, and education to facilitate progress in these areas.\nThe proposed CECAM workshop aims to bring together academia, industry, and non-profits. Our goal is to discuss future directions, create a roadmap, develop new benchmarks and evaluations, and establish a framework for ongoing collaboration."),(0,i.yg)("h3",{id:"references"},"References"),(0,i.yg)("p",null,"[1]"," A. White, Nat. Rev. Chem., 7, 457-458 (2023)"),(0,i.yg)("p",null,"[2]"," G. Hocky, A. White, Digital Discovery, 1, 79-83 (2022)"),(0,i.yg)("p",null,"[3]"," A. White, G. Hocky, H. Gandhi, M. Ansari, S. Cox, G. Wellawatte, S. Sasmal, Z. Yang, K. Liu, Y. Singh, W. Pe\xf1a Ccoa, Digital Discovery, 2, 368-376 (2023)"),(0,i.yg)("p",null,"[4]"," K. Jablonka, P. Schwaller, A. Ortega-Guerrero, B. Smit, Is GPT all you need for low-data discovery in chemistry?, Nature Machine Intelligence, (2024)"),(0,i.yg)("p",null,"[5]"," A. M. Bran, S. Cox, A. D. White, and P. Schwaller, \u201cChemCrow: Augmenting large-language models with chemistry tools\u201d, arXiv e-prints, 2023. doi:10.48550/arXiv.2304.05376."),(0,i.yg)("p",null,"[6]"," D. A. Boiko, R. MacKnight, and G. Gomes, \u201cEmergent autonomous scientific research capabilities of large language models\u201d, arXiv e-prints, 2023. doi:10.48550/arXiv.2304.05332."),(0,i.yg)("p",null,"[7]"," K. M, Jablonka, et al. \u201c14 Examples of How LLMs Can Transform Materials Science and Chemistry: A Reflection on a Large Language Model Hackathon\u201d, arXiv e-prints, 2023. doi:10.48550/arXiv.2306.06283."),(0,i.yg)("h2",{id:"sponsors"},"Sponsors"),(0,i.yg)("img",{src:"https://www.cecam.org/themes/cecam/assets/images/logo.png",style:{width:200}}),(0,i.yg)("img",{src:"img/SchmidtSciences_TempLogo.png",alt:"Schmidt Sciences",style:{width:200}}))}p.isMDXComponent=!0}}]);