import 'ckeditor5/ckeditor5.css';

import {
  Alignment,
  AutoImage,
  AutoLink,
  Base64UploadAdapter,
  Bold,
  Essentials,
  FindAndReplace,
  FontColor,
  FontFamily,
  FontSize,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  InlineEditor as InlineEditorBase,
  Italic,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  Undo,
} from 'ckeditor5';

export default class InlineEditor extends InlineEditorBase {}

InlineEditor.builtinPlugins = [
  Alignment,
  AutoImage,
  AutoLink,
  Base64UploadAdapter,
  Bold,
  Essentials,
  FindAndReplace,
  FontColor,
  FontFamily,
  FontSize,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  Undo,
];

InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'alignment:left',
      'alignment:right',
      'alignment:center',
      'alignment:justify',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
      '|',
      'fontColor',
      '|',
      'subscript',
      'superscript',
      '|',
      'undo',
      'redo',
      '|',
      'link',
      'imageUpload',
      'insertTable',
      '|',
      'findAndReplace',
      'selectAll',
      '|',
      'removeFormat',
    ],
    shouldNotGroupWhenFull: true,
  },
  language: 'en',
  image: {
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
};
