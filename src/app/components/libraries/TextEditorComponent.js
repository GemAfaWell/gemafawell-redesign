// 'use client'

// import { useState, useEffect, useRef } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';

// import {
//     ClassicEditor,
//     AccessibilityHelp,
//     Autoformat,
//     AutoImage,
//     AutoLink,
//     Autosave,
//     BalloonToolbar,
//     Bold,
//     CloudServices,
//     Code,
//     CodeBlock,
//     Essentials,
//     GeneralHtmlSupport,
//     Heading,
//     HtmlComment,
//     HtmlEmbed,
//     ImageBlock,
//     ImageCaption,
//     ImageInline,
//     ImageInsertViaUrl,
//     ImageResize,
//     ImageStyle,
//     ImageTextAlternative,
//     ImageToolbar,
//     ImageUpload,
//     Italic,
//     Link,
//     LinkImage,
//     List,
//     ListProperties,
//     Paragraph,
//     SelectAll,
//     ShowBlocks,
//     SourceEditing,
//     Table,
//     TableCaption,
//     TableCellProperties,
//     TableColumnResize,
//     TableProperties,
//     TableToolbar,
//     TextTransformation,
//     Undo
// } from 'ckeditor5';

// import 'ckeditor5/ckeditor5.css';

// import '../../text-editor.css';

// export default function MyEditor() {
//     const editorContainerRef = useRef(null);
//     const editorRef = useRef(null);
//     const [isLayoutReady, setIsLayoutReady] = useState(false);

//     useEffect(() => {
//         setIsLayoutReady(true);

//         return () => setIsLayoutReady(false);
//     }, []);

//     const editorConfig = {
//         toolbar: {
//             items: [
//                 'undo',
//                 'redo',
//                 '|',
//                 'sourceEditing',
//                 'showBlocks',
//                 '|',
//                 'heading',
//                 '|',
//                 'bold',
//                 'italic',
//                 'code',
//                 '|',
//                 'link',
//                 'insertTable',
//                 'codeBlock',
//                 'htmlEmbed',
//                 '|',
//                 'bulletedList',
//                 'numberedList'
//             ],
//             shouldNotGroupWhenFull: false
//         },
//         plugins: [
//             AccessibilityHelp,
//             Autoformat,
//             AutoImage,
//             AutoLink,
//             Autosave,
//             BalloonToolbar,
//             Bold,
//             CloudServices,
//             Code,
//             CodeBlock,
//             Essentials,
//             GeneralHtmlSupport,
//             Heading,
//             HtmlComment,
//             HtmlEmbed,
//             ImageBlock,
//             ImageCaption,
//             ImageInline,
//             ImageInsertViaUrl,
//             ImageResize,
//             ImageStyle,
//             ImageTextAlternative,
//             ImageToolbar,
//             ImageUpload,
//             Italic,
//             Link,
//             LinkImage,
//             List,
//             ListProperties,
//             Paragraph,
//             SelectAll,
//             ShowBlocks,
//             SourceEditing,
//             Table,
//             TableCaption,
//             TableCellProperties,
//             TableColumnResize,
//             TableProperties,
//             TableToolbar,
//             TextTransformation,
//             Undo
//         ],
//         balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
//         heading: {
//             options: [
//                 {
//                     model: 'paragraph',
//                     title: 'Paragraph',
//                     class: 'ck-heading_paragraph'
//                 },
//                 {
//                     model: 'heading1',
//                     view: 'h1',
//                     title: 'Heading 1',
//                     class: 'ck-heading_heading1'
//                 },
//                 {
//                     model: 'heading2',
//                     view: 'h2',
//                     title: 'Heading 2',
//                     class: 'ck-heading_heading2'
//                 },
//                 {
//                     model: 'heading3',
//                     view: 'h3',
//                     title: 'Heading 3',
//                     class: 'ck-heading_heading3'
//                 },
//                 {
//                     model: 'heading4',
//                     view: 'h4',
//                     title: 'Heading 4',
//                     class: 'ck-heading_heading4'
//                 },
//                 {
//                     model: 'heading5',
//                     view: 'h5',
//                     title: 'Heading 5',
//                     class: 'ck-heading_heading5'
//                 },
//                 {
//                     model: 'heading6',
//                     view: 'h6',
//                     title: 'Heading 6',
//                     class: 'ck-heading_heading6'
//                 }
//             ]
//         },
//         htmlSupport: {
//             allow: [
//                 {
//                     name: /^.*$/,
//                     styles: true,
//                     attributes: true,
//                     classes: true
//                 }
//             ]
//         },
//         image: {
//             toolbar: [
//                 'toggleImageCaption',
//                 'imageTextAlternative',
//                 '|',
//                 'imageStyle:inline',
//                 'imageStyle:wrapText',
//                 'imageStyle:breakText',
//                 '|',
//                 'resizeImage'
//             ]
//         },
//         initialData:
//             '<p>inquire within, friend!</p>',
//         link: {
//             addTargetToExternalLinks: true,
//             defaultProtocol: 'https://',
//             decorators: {
//                 toggleDownloadable: {
//                     mode: 'manual',
//                     label: 'Downloadable',
//                     attributes: {
//                         download: 'file'
//                     }
//                 }
//             }
//         },
//         list: {
//             properties: {
//                 styles: true,
//                 startIndex: true,
//                 reversed: true
//             }
//         },
//         placeholder: 'Type or paste your content here!',
//         table: {
//             contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
//         }
//     };

//     return (
//         <div>
//             <div className="main-container">
//                 <div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
//                     <div className="editor-container__editor">
//                         <div ref={editorRef}>{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
