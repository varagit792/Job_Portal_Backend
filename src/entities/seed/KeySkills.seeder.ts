import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { KeySkills } from '../keySkills.entity';

export default class KeySkillsSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(KeySkills);
    await repository.upsert([
      {
        title: 'A.NET (A#/A sharp)',
        status: true,
      },
      {
        title: 'A-0 System',
        status: true,
      },
      {
        title: 'A+ (A plus)',
        status: true,
      },
      {
        title: 'ABAP',
        status: true,
      },
      {
        title: 'ABC',
        status: true,
      },
      {
        title: 'ABC ALGOL',
        status: true,
      },
      {
        title: 'ACC',
        status: true,
      },
      {
        title: 'Accent (Rational Synergy)',
        status: true,
      },
      {
        title: 'Ace Distributed Application Specification Language (DASL)',
        status: true,
      },
      {
        title: 'Action!',
        status: true,
      },
      {
        title: 'ActionScript',
        status: true,
      },
      {
        title: 'Actor',
        status: true,
      },
      {
        title: 'Ada – ISO/IEC 8652',
        status: true,
      },
      {
        title: 'Adenine (Haystack)',
        status: true,
      },
      {
        title: 'AdvPL',
        status: true,
      },
      {
        title: 'Agda',
        status: true,
      },
      {
        title: 'Agilent VEE (Keysight VEE)',
        status: true,
      },
      {
        title: 'Agora',
        status: true,
      },
      {
        title: 'AIMMS',
        status: true,
      },
      {
        title: 'Aldor',
        status: true,
      },
      {
        title: 'Alef',
        status: true,
      },
      {
        title: 'ALF',
        status: true,
      },
      {
        title: 'ALGOL 58',
        status: true,
      },
      {
        title: 'ALGOL 60',
        status: true,
      },
      {
        title: 'ALGOL 68',
        status: true,
      },
      {
        title: 'ALGOL W',
        status: true,
      },
      {
        title: 'Alice (Alice ML)',
        status: true,
      },
      {
        title: 'Alma-0',
        status: true,
      },
      {
        title: 'AmbientTalk',
        status: true,
      },
      {
        title: 'Amiga E',
        status: true,
      },
      {
        title: 'AMPL',
        status: true,
      },
      {
        title: 'Analitik',
        status: true,
      },
      {
        title: 'AngelScript',
        status: true,
      },
      {
        title: 'Apache Pig latin',
        status: true,
      },
      {
        title: 'Apex (Salesforce.com, Inc)',
        status: true,
      },
      {
        title: 'APL',
        status: true,
      },
      {
        title: 'App Inventor for Androids visual block language(MIT App Inventor)',
        status: true,
      },
      {
        title: 'AppleScript',
        status: true,
      },
      {
        title: 'APT',
        status: true,
      },
      {
        title: 'Arc',
        status: true,
      },
      {
        title: 'ARexx',
        status: true,
      },
      {
        title: 'Argus',
        status: true,
      },
      {
        title: 'Assembly language (ASM)',
        status: true,
      },
      {
        title: 'AutoHotkey',
        status: true,
      },
      {
        title: 'AutoIt',
        status: true,
      },
      {
        title: 'AutoLISP / Visual LISP',
        status: true,
      },
      {
        title: 'Averest',
        status: true,
      },
      {
        title: 'AWK',
        status: true,
      },
      {
        title: 'Axum',
        status: true,
      },
      {
        title: 'Babbage',
        status: true,
      },
      {
        title: 'Ballerina',
        status: true,
      },
      {
        title: 'Bash',
        status: true,
      },
      {
        title: 'BASIC',
        status: true,
      },
      {
        title: 'Batch file (Windows/MS-DOS)',
        status: true,
      },
      {
        title: 'bc (basic calculator)',
        status: true,
      },
      {
        title: 'BCPL',
        status: true,
      },
      {
        title: 'BeanShell',
        status: true,
      },
      {
        title: 'BETA',
        status: true,
      },
      {
        title: 'BLISS',
        status: true,
      },
      {
        title: 'Blockly',
        status: true,
      },
      {
        title: 'BlooP',
        status: true,
      },
      {
        title: 'Boo',
        status: true,
      },
      {
        title: 'Boomerang',
        status: true,
      },
      {
        title: 'Bosque',
        status: true,
      },
      {
        title: 'C – ISO/IEC 9899',
        status: true,
      },
      {
        title: 'C-- (C minus minus)',
        status: true,
      },
      {
        title: 'C++ (C plus plus) – ISO/IEC 14882',
        status: true,
      },
      {
        title: 'C*',
        status: true,
      },
      {
        title: 'C# (C sharp) – ISO/IEC 23270',
        status: true,
      },
      {
        title: 'C/AL',
        status: true,
      },
      {
        title: 'Java',
        status: true,
      },
      {
        title: 'Caché ObjectScript',
        status: true,
      },
      {
        title: 'C Shell (csh)',
        status: true,
      },
      {
        title: 'Caml',
        status: true,
      },
      {
        title: 'Carbon',
        status: true,
      },
      {
        title: 'Catrobat',
        status: true,
      },
      {
        title: 'Cayenne (Lennart Augustsson)',
        status: true,
      },
      {
        title: 'CDuce',
        status: true,
      },
      {
        title: 'Cecil',
        status: true,
      },
      {
        title: 'CESIL (Computer Education in Schools Instruction Language)',
        status: true,
      },
      {
        title: 'Céu',
        status: true,
      },
      {
        title: 'Ceylon',
        status: true,
      },
      {
        title: 'CFEngine',
        status: true,
      },
      {
        title: 'Cg (High-Level Shader/Shading Language [HLSL])',
        status: true,
      },
      {
        title: 'Ch',
        status: true,
      },
      {
        title: 'Chapel (Cascade High Productivity Language)',
        status: true,
      },
      {
        title: 'Charm',
        status: true,
      },
      {
        title: 'CHILL',
        status: true,
      },
      {
        title: 'CHIP-8',
        status: true,
      },
      {
        title: 'ChucK',
        status: true,
      },
      {
        title: 'Cilk (also Cilk++ and Cilk plus)',
        status: true,
      },
      {
        title: 'Claire',
        status: true,
      },
      {
        title: 'Clarion',
        status: true,
      },
      {
        title: 'Clean',
        status: true,
      },
      {
        title: 'Clipper',
        status: true,
      },
      {
        title: 'CLIPS',
        status: true,
      },
      {
        title: 'CLIST',
        status: true,
      },
      {
        title: 'Clojure',
        status: true,
      },
      {
        title: 'CLU',
        status: true,
      },
      {
        title: 'CMS-2',
        status: true,
      },
      {
        title: 'COBOL – ISO/IEC 1989',
        status: true,
      },
      {
        title: 'CobolScript – COBOL Scripting language',
        status: true,
      },
      {
        title: 'Cobra',
        status: true,
      },
      {
        title: 'CoffeeScript',
        status: true,
      },
      {
        title: 'ColdFusion',
        status: true,
      },
      {
        title: 'COMAL',
        status: true,
      },
      {
        title: 'COMIT',
        status: true,
      },
      {
        title: 'Common Intermediate Language (CIL)',
        status: true,
      },
      {
        title: 'Common Lisp (also known as CL)',
        status: true,
      },
      {
        title: 'COMPASS',
        status: true,
      },
      {
        title: 'Node Js',
        status: true,
      },
      {
        title: 'React Js',
        status: true,
      },
      {
        title: 'Component Pascal',
        status: true,
      },
      {
        title: 'COMTRAN',
        status: true,
      },
      {
        title: 'Concurrent Pascal',
        status: true,
      },
      {
        title: 'Constraint Handling Rules (CHR)',
        status: true,
      },
      {
        title: 'Control Language',
        status: true,
      },
      {
        title: 'Coq',
        status: true,
      },
      {
        title: 'CORAL, Coral 66',
        status: true,
      },
      {
        title: 'CorVision',
        status: true,
      },
      {
        title: 'COWSEL',
        status: true,
      },
      {
        title: 'CPL',
        status: true,
      },
      {
        title: 'Cryptol',
        status: true,
      },
      {
        title: 'Crystal',
        status: true,
      },
      {
        title: 'Csound',
        status: true,
      },
      {
        title: 'Cuneiform',
        status: true,
      },
      {
        title: 'Curl',
        status: true,
      },
      {
        title: 'Curry',
        status: true,
      },
      {
        title: 'Cybil',
        status: true,
      },
      {
        title: 'Cyclone',
        status: true,
      },
      {
        title: 'Cypher Query Language',
        status: true,
      },
      {
        title: 'Cython',
        status: true,
      },
      {
        title: 'CEEMAC',
        status: true,
      },
      {
        title: 'D (also known as dlang)',
        status: true,
      },
      {
        title: 'Dart',
        status: true,
      },
      {
        title: 'Darwin',
        status: true,
      },
      {
        title: 'DataFlex',
        status: true,
      },
      {
        title: 'Datalog',
        status: true,
      },
      {
        title: 'DATATRIEVE',
        status: true,
      },
      {
        title: 'dBase',
        status: true,
      },
      {
        title: 'dc',
        status: true,
      },
      {
        title: 'DCL (DIGITAL Command Language)',
        status: true,
      },
      {
        title: 'Delphi',
        status: true,
      },
      {
        title: 'DIBOL',
        status: true,
      },
      {
        title: 'DinkC',
        status: true,
      },
      {
        title: 'Dog',
        status: true,
      },
      {
        title: 'Draco',
        status: true,
      },
      {
        title: 'DRAKON',
        status: true,
      },
      {
        title: 'Dylan',
        status: true,
      },
      {
        title: 'DYNAMO',
        status: true,
      },
      {
        title: 'DAX (Data Analysis Expressions)',
        status: true,
      },
      {
        title: 'E',
        status: true,
      },
      {
        title: 'Ease',
        status: true,
      },
      {
        title: 'Easy PL/I',
        status: true,
      },
      {
        title: 'EASYTRIEVE PLUS',
        status: true,
      },
      {
        title: 'eC',
        status: true,
      },
      {
        title: 'ECMAScript',
        status: true,
      },
      {
        title: 'Edinburgh IMP',
        status: true,
      },
      {
        title: 'EGL',
        status: true,
      },
      {
        title: 'Eiffel',
        status: true,
      },
      {
        title: 'ELAN',
        status: true,
      },
      {
        title: 'Elixir',
        status: true,
      },
      {
        title: 'Elm',
        status: true,
      },
      {
        title: 'Emacs Lisp',
        status: true,
      },
      {
        title: 'Emerald',
        status: true,
      },
      {
        title: 'Epigram',
        status: true,
      },
      {
        title: 'EPL (Easy Programming Language)',
        status: true,
      },
      {
        title: 'Erlang',
        status: true,
      },
      {
        title: 'es',
        status: true,
      },
      {
        title: 'Escher',
        status: true,
      },
      {
        title: 'ESPOL',
        status: true,
      },
      {
        title: 'Esterel',
        status: true,
      },
      {
        title: 'Etoys',
        status: true,
      },
      {
        title: 'Euclid',
        status: true,
      },
      {
        title: 'Euler',
        status: true,
      },
      {
        title: 'Euphoria',
        status: true,
      },
      {
        title: 'EusLisp Robot Programming Language',
        status: true,
      },
      {
        title: 'CMS EXEC (EXEC)',
        status: true,
      },
      {
        title: 'EXEC 2',
        status: true,
      },
      {
        title: 'Executable UML',
        status: true,
      },
      {
        title: 'Ezhil',
        status: true,
      },
      {
        title: 'F',
        status: true,
      },
      {
        title: 'F# (F sharp)',
        status: true,
      },
      {
        title: 'F*',
        status: true,
      },
      {
        title: 'Factor',
        status: true,
      },
      {
        title: 'Fantom',
        status: true,
      },
      {
        title: 'FAUST',
        status: true,
      },
      {
        title: 'FFP',
        status: true,
      },
      {
        title: 'fish',
        status: true,
      },
      {
        title: 'Fjölnir',
        status: true,
      },
      {
        title: 'FL',
        status: true,
      },
      {
        title: 'Flavors',
        status: true,
      },
      {
        title: 'Flex',
        status: true,
      },
      {
        title: 'Flix',
        status: true,
      },
      {
        title: 'FlooP',
        status: true,
      },
      {
        title: 'FLOW-MATIC (B0)',
        status: true,
      },
      {
        title: 'FOCAL (Formulating On-Line Calculations in Algebraic Language/FOrmula CALculator)',
        status: true,
      },
      {
        title: 'FOCUS',
        status: true,
      },
      {
        title: 'FOIL',
        status: true,
      },
      {
        title: 'FORMAC (FORMula MAnipulation Compiler)',
        status: true,
      },
      {
        title: '@Formula',
        status: true,
      },
      {
        title: 'Forth',
        status: true,
      },
      {
        title: 'Fortran – ISO/IEC 1539',
        status: true,
      },
      {
        title: 'Fortress',
        status: true,
      },
      {
        title: 'FP',
        status: true,
      },
      {
        title: 'FoxBase/FoxPro',
        status: true,
      },
      {
        title: 'Franz Lisp',
        status: true,
      },
      {
        title: 'Futhark',
        status: true,
      },
      {
        title: 'F-Script',
        status: true,
      },
      {
        title: 'Game Maker Language',
        status: true,
      },
      {
        title: 'GameMonkey Script',
        status: true,
      },
      {
        title: 'General Algebraic Modeling System (GAMS)',
        status: true,
      },
      {
        title: 'GAP',
        status: true,
      },
      {
        title: 'G-code',
        status: true,
      },
      {
        title: 'GDScript (Godot)',
        status: true,
      },
      {
        title: 'Genie',
        status: true,
      },
      {
        title: 'Geometric Description Language (GDL)',
        status: true,
      },
      {
        title: 'GEORGE',
        status: true,
      },
      {
        title: 'OpenGL Shading Language (GLSL)',
        status: true,
      },
      {
        title: 'GNU E',
        status: true,
      },
      {
        title: 'GNU Ubiquitous Intelligent Language for Extensions (GNU Guile)',
        status: true,
      },
      {
        title: 'Go',
        status: true,
      },
      {
        title: 'Go!',
        status: true,
      },
      {
        title: 'Game Oriented Assembly Lisp (GOAL)',
        status: true,
      },
      {
        title: 'Gödel',
        status: true,
      },
      {
        title: 'Golo',
        status: true,
      },
      {
        title: 'Good Old Mad (GOM)',
        status: true,
      },
      {
        title: 'Google Apps Script',
        status: true,
      },
      {
        title: 'Gosu',
        status: true,
      },
      {
        title: 'GOTRAN (IBM 1620)',
        status: true,
      },
      {
        title: 'General Purpose Simulation System (GPSS)',
        status: true,
      },
      {
        title: 'GraphTalk (Computer Sciences Corporation)',
        status: true,
      },
      {
        title: 'GRASS',
        status: true,
      },
      {
        title: 'Grasshopper',
        status: true,
      },
      {
        title: 'Groovy (by Apache)',
        status: true,
      },
      {
        title: 'Hack',
        status: true,
      },
      {
        title: 'HAGGIS',
        status: true,
      },
      {
        title: 'HAL/S',
        status: true,
      },
      {
        title: 'Halide (programming language)',
        status: true,
      },
      {
        title: 'Hamilton C shell',
        status: true,
      },
      {
        title: 'Harbour',
        status: true,
      },
      {
        title: 'Hartmann pipelines',
        status: true,
      },
      {
        title: 'Haskell',
        status: true,
      },
      {
        title: 'Haxe',
        status: true,
      },
      {
        title: 'Hermes',
        status: true,
      },
      {
        title: 'High Level Assembly (HLA)',
        status: true,
      },
      {
        title: 'High Level Shader Language (HLSL)',
        status: true,
      },
      {
        title: 'Hollywood',
        status: true,
      },
      {
        title: 'HolyC (TempleOS)',
        status: true,
      },
      {
        title: 'Hop',
        status: true,
      },
      {
        title: 'Hopscotch',
        status: true,
      },
      {
        title: 'Hope',
        status: true,
      },
      {
        title: 'Hume',
        status: true,
      },
      {
        title: 'HyperTalk',
        status: true,
      },
      {
        title: 'Hy',
        status: true,
      },
      {
        title: 'Io',
        status: true,
      },
      {
        title: 'Icon',
        status: true,
      },
      {
        title: 'IBM Basic assembly language',
        status: true,
      },
      {
        title: 'IBM HAScript',
        status: true,
      },
      {
        title: 'IBM Informix-4GL',
        status: true,
      },
      {
        title: 'IBM RPG',
        status: true,
      },
      {
        title: 'IDL',
        status: true,
      },
      {
        title: 'Idris',
        status: true,
      },
      {
        title: 'Inform',
        status: true,
      },
      {
        title: 'ISLISP',
        status: true,
      },
      {
        title: 'J',
        status: true,
      },
      {
        title: 'J# (J sharp)',
        status: true,
      },
      {
        title: 'J++ (J plus plus)',
        status: true,
      },
      {
        title: 'JADE',
        status: true,
      },
      {
        title: 'Jai',
        status: true,
      },
      {
        title: 'JAL',
        status: true,
      },
      {
        title: 'Janus (concurrent constraint programming language)',
        status: true,
      },
      {
        title: 'Janus (time-reversible computing programming language)',
        status: true,
      },
      {
        title: 'JASS',
        status: true,
      },
      {
        title: 'JavaFX Script',
        status: true,
      },
      {
        title: 'JavaScript',
        status: true,
      },
      {
        title: 'Jess',
        status: true,
      },
      {
        title: 'JCL',
        status: true,
      },
      {
        title: 'JEAN',
        status: true,
      },
      {
        title: 'Join Java',
        status: true,
      },
      {
        title: 'JOSS',
        status: true,
      },
      {
        title: 'Joule',
        status: true,
      },
      {
        title: 'JOVIAL',
        status: true,
      },
      {
        title: 'Joy',
        status: true,
      },
      {
        title: 'jq',
        status: true,
      },
      {
        title: 'JScript',
        status: true,
      },
      {
        title: 'JScript .NET',
        status: true,
      },
      {
        title: 'Julia',
        status: true,
      },
      {
        title: 'Jython',
        status: true,
      },
      {
        title: 'K',
        status: true,
      },
      {
        title: 'Kaleidoscope',
        status: true,
      },
      {
        title: 'Karel',
        status: true,
      },
      {
        title: 'KEE',
        status: true,
      },
      {
        title: 'Kixtart',
        status: true,
      },
      {
        title: 'Klerer-May System',
        status: true,
      },
      {
        title: 'KIF (Knowledge Interchange Format)',
        status: true,
      },
      {
        title: 'Kojo',
        status: true,
      },
      {
        title: 'Kotlin',
        status: true,
      },
      {
        title: 'KRC',
        status: true,
      },
      {
        title: 'KRL',
        status: true,
      },
      {
        title: 'KRL (KUKA Robot Language)',
        status: true,
      },
      {
        title: 'KRYPTON',
        status: true,
      },
      {
        title: 'KornShell (ksh)',
        status: true,
      },
      {
        title: 'Kodu',
        status: true,
      },
      {
        title: 'Kv (Kivy)',
        status: true,
      },
      {
        title: 'LabVIEW',
        status: true,
      },
      {
        title: 'Ladder',
        status: true,
      },
      {
        title: 'LANSA',
        status: true,
      },
      {
        title: 'Lasso',
        status: true,
      },
      {
        title: 'Lava',
        status: true,
      },
      {
        title: 'LC-3',
        status: true,
      },
      {
        title: 'Lean',
        status: true,
      },
      {
        title: 'Legoscript',
        status: true,
      },
      {
        title: 'LIL',
        status: true,
      },
      {
        title: 'LilyPond',
        status: true,
      },
      {
        title: 'Limbo',
        status: true,
      },
      {
        title: 'LINC',
        status: true,
      },
      {
        title: 'Lingo',
        status: true,
      },
      {
        title: 'LINQ',
        status: true,
      },
      {
        title: 'LIS',
        status: true,
      },
      {
        title: 'LISA',
        status: true,
      },
      {
        title: 'Language H',
        status: true,
      },
      {
        title: 'Lisp – ISO/IEC 13816',
        status: true,
      },
      {
        title: 'Lite-C',
        status: true,
      },
      {
        title: 'Lithe',
        status: true,
      },
      {
        title: 'Little b',
        status: true,
      },
      {
        title: 'LLL',
        status: true,
      },
      {
        title: 'Logo',
        status: true,
      },
      {
        title: 'Logtalk',
        status: true,
      },
      {
        title: 'LotusScript',
        status: true,
      },
      {
        title: 'LPC',
        status: true,
      },
      {
        title: 'LSE',
        status: true,
      },
      {
        title: 'LSL',
        status: true,
      },
      {
        title: 'LiveCode',
        status: true,
      },
      {
        title: 'LiveScript',
        status: true,
      },
      {
        title: 'Lua',
        status: true,
      },
      {
        title: 'Lucid',
        status: true,
      },
      {
        title: 'Lustre',
        status: true,
      },
      {
        title: 'LYaPAS',
        status: true,
      },
      {
        title: 'Lynx',
        status: true,
      },
      {
        title: 'M Formula language',
        status: true,
      },
      {
        title: 'M2001',
        status: true,
      },
      {
        title: 'M4',
        status: true,
      },
      {
        title: 'M#',
        status: true,
      },
      {
        title: 'Machine code',
        status: true,
      },
      {
        title: 'MAD (Michigan Algorithm Decoder)',
        status: true,
      },
      {
        title: 'MAD/I',
        status: true,
      },
      {
        title: 'Magik',
        status: true,
      },
      {
        title: 'Magma',
        status: true,
      },
      {
        title: 'Máni',
        status: true,
      },
      {
        title: 'Maple',
        status: true,
      },
      {
        title: 'MAPPER (now part of BIS)',
        status: true,
      },
      {
        title: 'MARK-IV (now VISION:BUILDER)',
        status: true,
      },
      {
        title: 'Mary',
        status: true,
      },
      {
        title: 'MATLAB',
        status: true,
      },
      {
        title: 'MASM Microsoft Assembly x86',
        status: true,
      },
      {
        title: 'MATH-MATIC',
        status: true,
      },
      {
        title: 'Maude system',
        status: true,
      },
      {
        title: 'Maxima (see also Macsyma)',
        status: true,
      },
      {
        title: 'Max (Max Msp – Graphical Programming Environment)',
        status: true,
      },
      {
        title: 'MaxScript internal language 3D Studio Max',
        status: true,
      },
      {
        title: 'Maya (MEL)',
        status: true,
      },
      {
        title: 'MDL',
        status: true,
      },
      {
        title: 'Mercury',
        status: true,
      },
      {
        title: 'Mesa',
        status: true,
      },
      {
        title: 'MHEG-5 (Interactive TV programming language)',
        status: true,
      },
      {
        title: 'Microcode',
        status: true,
      },
      {
        title: 'Microsoft Power Fx',
        status: true,
      },
      {
        title: 'MIIS',
        status: true,
      },
      {
        title: 'Milk (programming language)',
        status: true,
      },
      {
        title: 'MIMIC',
        status: true,
      },
      {
        title: 'Mirah',
        status: true,
      },
      {
        title: 'Miranda',
        status: true,
      },
      {
        title: 'MIVA Script',
        status: true,
      },
      {
        title: 'ML',
        status: true,
      },
      {
        title: 'Model 204',
        status: true,
      },
      {
        title: 'Modelica',
        status: true,
      },
      {
        title: 'Malbolge',
        status: true,
      },
      {
        title: 'Modula',
        status: true,
      },
      {
        title: 'Modula-2',
        status: true,
      },
      {
        title: 'Modula-3',
        status: true,
      },
      {
        title: 'Mohol',
        status: true,
      },
      {
        title: 'MOO',
        status: true,
      },
      {
        title: 'Mortran',
        status: true,
      },
      {
        title: 'Mouse',
        status: true,
      },
      {
        title: 'MPD',
        status: true,
      },
      {
        title: 'MSL',
        status: true,
      },
      {
        title: 'MUMPS',
        status: true,
      },
      {
        title: 'MuPAD',
        status: true,
      },
      {
        title: 'Mutan',
        status: true,
      },
      {
        title: 'Mystic Programming Language (MPL)',
        status: true,
      },
      {
        title: 'NASM',
        status: true,
      },
      {
        title: 'Napier88',
        status: true,
      },
      {
        title: 'Neko',
        status: true,
      },
      {
        title: 'Nemerle',
        status: true,
      },
      {
        title: 'NESL',
        status: true,
      },
      {
        title: 'Net.Data',
        status: true,
      },
      {
        title: 'NetLogo',
        status: true,
      },
      {
        title: 'NetRexx',
        status: true,
      },
      {
        title: 'NewLISP',
        status: true,
      },
      {
        title: 'NEWP',
        status: true,
      },
      {
        title: 'Newspeak',
        status: true,
      },
      {
        title: 'NewtonScript',
        status: true,
      },
      {
        title: 'Nial',
        status: true,
      },
      {
        title: 'Nickle (NITIN)',
        status: true,
      },
      {
        title: 'Nim',
        status: true,
      },
      {
        title: 'Nix (Systems configuration language)',
        status: true,
      },
      {
        title: 'NPL',
        status: true,
      },
      {
        title: 'Not eXactly C (NXC)',
        status: true,
      },
      {
        title: 'Not Quite C (NQC)',
        status: true,
      },
      {
        title: 'NSIS',
        status: true,
      },
      {
        title: 'Nu',
        status: true,
      },
      {
        title: 'NWScript',
        status: true,
      },
      {
        title: 'NXT-G',
        status: true,
      },
      {
        title: 'o:XML',
        status: true,
      },
      {
        title: 'Oak',
        status: true,
      },
      {
        title: 'Oberon',
        status: true,
      },
      {
        title: 'OBJ2',
        status: true,
      },
      {
        title: 'Object Lisp',
        status: true,
      },
      {
        title: 'ObjectLOGO',
        status: true,
      },
      {
        title: 'Object REXX',
        status: true,
      },
      {
        title: 'Object Pascal',
        status: true,
      },
      {
        title: 'Objective-C',
        status: true,
      },
      {
        title: 'Obliq',
        status: true,
      },
      {
        title: 'OCaml',
        status: true,
      },
      {
        title: 'occam',
        status: true,
      },
      {
        title: 'occam-π',
        status: true,
      },
      {
        title: 'Octave',
        status: true,
      },
      {
        title: 'OmniMark',
        status: true,
      },
      {
        title: 'Opa',
        status: true,
      },
      {
        title: 'Opal',
        status: true,
      },
      {
        title: 'Open Programming Language (OPL)',
        status: true,
      },
      {
        title: 'OpenCL',
        status: true,
      },
      {
        title: 'OpenEdge Advanced Business Language (ABL)',
        status: true,
      },
      {
        title: 'OpenVera',
        status: true,
      },
      {
        title: 'OpenQASM',
        status: true,
      },
      {
        title: 'OPS5',
        status: true,
      },
      {
        title: 'OptimJ',
        status: true,
      },
      {
        title: 'Orc',
        status: true,
      },
      {
        title: 'ORCA/Modula-2',
        status: true,
      },
      {
        title: 'Oriel',
        status: true,
      },
      {
        title: 'Orwell',
        status: true,
      },
      {
        title: 'Oxygene',
        status: true,
      },
      {
        title: 'Oz',
        status: true,
      },
      {
        title: 'P',
        status: true,
      },
      {
        title: 'P4',
        status: true,
      },
      {
        title: 'P′′',
        status: true,
      },
      {
        title: 'ParaSail',
        status: true,
      },
      {
        title: 'PARI/GP',
        status: true,
      },
      {
        title: 'Pascal – ISO 7185',
        status: true,
      },
      {
        title: 'Pascal Script',
        status: true,
      },
      {
        title: 'PCASTL',
        status: true,
      },
      {
        title: 'PCF',
        status: true,
      },
      {
        title: 'PEARL',
        status: true,
      },
      {
        title: 'PeopleCode',
        status: true,
      },
      {
        title: 'Perl',
        status: true,
      },
      {
        title: 'PDL',
        status: true,
      },
      {
        title: 'Pharo',
        status: true,
      },
      {
        title: 'PHP',
        status: true,
      },
      {
        title: 'MYSQL',
        status: true,
      },
      {
        title: 'Pico',
        status: true,
      },
      {
        title: 'Picolisp',
        status: true,
      },
      {
        title: 'Pict',
        status: true,
      },
      {
        title: 'Pike',
        status: true,
      },
      {
        title: 'PILOT',
        status: true,
      },
      {
        title: 'Pipelines',
        status: true,
      },
      {
        title: 'Pizza',
        status: true,
      },
      {
        title: 'PL-11',
        status: true,
      },
      {
        title: 'PL/0',
        status: true,
      },
      {
        title: 'PL/B',
        status: true,
      },
      {
        title: 'PL/C',
        status: true,
      },
      {
        title: 'PL/I – ISO 6160',
        status: true,
      },
      {
        title: 'PL/M',
        status: true,
      },
      {
        title: 'PL/P',
        status: true,
      },
      {
        title: 'PL/S',
        status: true,
      },
      {
        title: 'PL/SQL',
        status: true,
      },
      {
        title: 'PL360',
        status: true,
      },
      {
        title: 'PLANC',
        status: true,
      },
      {
        title: 'Plankalkül',
        status: true,
      },
      {
        title: 'Planner',
        status: true,
      },
      {
        title: 'PLEX',
        status: true,
      },
      {
        title: 'PLEXIL',
        status: true,
      },
      {
        title: 'Plus',
        status: true,
      },
      {
        title: 'POP-11',
        status: true,
      },
      {
        title: 'POP-2',
        status: true,
      },
      {
        title: 'PostScript',
        status: true,
      },
      {
        title: 'PortablE',
        status: true,
      },
      {
        title: 'POV-Ray SDL',
        status: true,
      },
      {
        title: 'Powerhouse',
        status: true,
      },
      {
        title: 'PowerBuilder – 4GL GUI application generator from Sybase',
        status: true,
      },
      {
        title: 'PowerShell',
        status: true,
      },
      {
        title: 'PPL',
        status: true,
      },
      {
        title: 'Processing',
        status: true,
      },
      {
        title: 'Processing.js',
        status: true,
      },
      {
        title: 'Prograph',
        status: true,
      },
      {
        title: 'Project Verona',
        status: true,
      },
      {
        title: 'Prolog',
        status: true,
      },
      {
        title: 'PROMAL',
        status: true,
      },
      {
        title: 'Promela',
        status: true,
      },
      {
        title: 'PROSE modeling language',
        status: true,
      },
      {
        title: 'PROTEL',
        status: true,
      },
      {
        title: 'ProvideX',
        status: true,
      },
      {
        title: 'Pro*C',
        status: true,
      },
      {
        title: 'Pure',
        status: true,
      },
      {
        title: 'Pure Data',
        status: true,
      },
      {
        title: 'PureScript',
        status: true,
      },
      {
        title: 'PWCT',
        status: true,
      },
      {
        title: 'Python',
        status: true,
      },
      {
        title: 'Q (programming language from Kx Systems)',
        status: true,
      },
      {
        title: 'Q#',
        status: true,
      },
      {
        title: 'Qalb',
        status: true,
      },
      {
        title: 'Quantum Computation Language',
        status: true,
      },
      {
        title: 'QtScript',
        status: true,
      },
      {
        title: 'QuakeC',
        status: true,
      },
      {
        title: 'QPL',
        status: true,
      },
      {
        title: '.QL',
        status: true,
      },
      {
        title: 'R',
        status: true,
      },
      {
        title: 'R++',
        status: true,
      },
      {
        title: 'Racket',
        status: true,
      },
      {
        title: 'Raku',
        status: true,
      },
      {
        title: 'RAPID',
        status: true,
      },
      {
        title: 'Rapira',
        status: true,
      },
      {
        title: 'Ratfiv',
        status: true,
      },
      {
        title: 'Ratfor',
        status: true,
      },
      {
        title: 'rc',
        status: true,
      },
      {
        title: 'Reason',
        status: true,
      },
      {
        title: 'REBOL',
        status: true,
      },
      {
        title: 'Red',
        status: true,
      },
      {
        title: 'Redcode',
        status: true,
      },
      {
        title: 'REFAL',
        status: true,
      },
      {
        title: 'REXX',
        status: true,
      },
      {
        title: 'Ring',
        status: true,
      },
      {
        title: 'ROOP',
        status: true,
      },
      {
        title: 'RPG',
        status: true,
      },
      {
        title: 'RPL',
        status: true,
      },
      {
        title: 'RSL',
        status: true,
      },
      {
        title: 'RTL/2',
        status: true,
      },
      {
        title: 'Ruby',
        status: true,
      },
      {
        title: 'Rust',
        status: true,
      },
      {
        title: 'S',
        status: true,
      },
      {
        title: 'S2',
        status: true,
      },
      {
        title: 'S3',
        status: true,
      },
      {
        title: 'S-Lang',
        status: true,
      },
      {
        title: 'S-PLUS',
        status: true,
      },
      {
        title: 'SA-C',
        status: true,
      },
      {
        title: 'SabreTalk',
        status: true,
      },
      {
        title: 'SAIL',
        status: true,
      },
      {
        title: 'SAKO',
        status: true,
      },
      {
        title: 'SAS',
        status: true,
      },
      {
        title: 'SASL',
        status: true,
      },
      {
        title: 'Sather',
        status: true,
      },
      {
        title: 'Sawzall',
        status: true,
      },
      {
        title: 'Scala',
        status: true,
      },
      {
        title: 'Scheme',
        status: true,
      },
      {
        title: 'Scilab',
        status: true,
      },
      {
        title: 'Scratch',
        status: true,
      },
      {
        title: 'ScratchJr',
        status: true,
      },
      {
        title: 'Script.NET',
        status: true,
      },
      {
        title: 'Sed',
        status: true,
      },
      {
        title: 'Seed7',
        status: true,
      },
      {
        title: 'Self',
        status: true,
      },
      {
        title: 'SenseTalk',
        status: true,
      },
      {
        title: 'SequenceL',
        status: true,
      },
      {
        title: 'Serpent',
        status: true,
      },
      {
        title: 'SETL',
        status: true,
      },
      {
        title: 'Short Code',
        status: true,
      },
      {
        title: 'SIMPOL',
        status: true,
      },
      {
        title: 'SIGNAL',
        status: true,
      },
      {
        title: 'SiMPLE',
        status: true,
      },
      {
        title: 'SIMSCRIPT',
        status: true,
      },
      {
        title: 'Simula',
        status: true,
      },
      {
        title: 'Simulink',
        status: true,
      },
      {
        title: 'SISAL',
        status: true,
      },
      {
        title: 'SKILL',
        status: true,
      },
      {
        title: 'SLIP',
        status: true,
      },
      {
        title: 'SMALL',
        status: true,
      },
      {
        title: 'Smalltalk',
        status: true,
      },
      {
        title: 'SML',
        status: true,
      },
      {
        title: 'Strongtalk',
        status: true,
      },
      {
        title: 'Snap!',
        status: true,
      },
      {
        title: 'SNOBOL (SPITBOL)',
        status: true,
      },
      {
        title: 'Snowball',
        status: true,
      },
      {
        title: 'SOL',
        status: true,
      },
      {
        title: 'Solidity',
        status: true,
      },
      {
        title: 'SOPHAEROS',
        status: true,
      },
      {
        title: 'Source',
        status: true,
      },
      {
        title: 'SPARK',
        status: true,
      },
      {
        title: 'Speakeasy',
        status: true,
      },
      {
        title: 'Speedcode',
        status: true,
      },
      {
        title: 'SPIN',
        status: true,
      },
      {
        title: 'SP/k',
        status: true,
      },
      {
        title: 'SPS',
        status: true,
      },
      {
        title: 'SQL',
        status: true,
      },
      {
        title: 'SQR',
        status: true,
      },
      {
        title: 'Squeak',
        status: true,
      },
      {
        title: 'Squirrel',
        status: true,
      },
      {
        title: 'SR',
        status: true,
      },
      {
        title: 'S/SL',
        status: true,
      },
      {
        title: 'Starlogo',
        status: true,
      },
      {
        title: 'Strand',
        status: true,
      },
      {
        title: 'Stata',
        status: true,
      },
      {
        title: 'Stateflow',
        status: true,
      },
      {
        title: 'Subtext',
        status: true,
      },
      {
        title: 'SBL',
        status: true,
      },
      {
        title: 'SuperCollider',
        status: true,
      },
      {
        title: 'Superplan',
        status: true,
      },
      {
        title: 'SuperTalk',
        status: true,
      },
      {
        title: 'Swift (Apple programming language)',
        status: true,
      },
      {
        title: 'Swift (parallel scripting language)',
        status: true,
      },
      {
        title: 'SYMPL',
        status: true,
      },
      {
        title: 'T',
        status: true,
      },
      {
        title: 'TACL',
        status: true,
      },
      {
        title: 'TACPOL',
        status: true,
      },
      {
        title: 'TADS (Text Adventure Development System)',
        status: true,
      },
      {
        title: 'TAL',
        status: true,
      },
      {
        title: 'Tcl',
        status: true,
      },
      {
        title: 'Tea',
        status: true,
      },
      {
        title: 'TECO (Text Editor and Corrector)',
        status: true,
      },
      {
        title: 'TELCOMP',
        status: true,
      },
      {
        title: 'TeX',
        status: true,
      },
      {
        title: 'TEX (Text Executive Programming Language)',
        status: true,
      },
      {
        title: 'TIE',
        status: true,
      },
      {
        title: 'TMG (TransMoGrifier), compiler-compiler',
        status: true,
      },
      {
        title: 'Tom',
        status: true,
      },
      {
        title: 'Toi',
        status: true,
      },
      {
        title: 'Topspeed (Clarion)',
        status: true,
      },
      {
        title: 'TPU (Text Processing Utility)',
        status: true,
      },
      {
        title: 'Trac',
        status: true,
      },
      {
        title: 'TTM',
        status: true,
      },
      {
        title: 'T-SQL (Transact-SQL)',
        status: true,
      },
      {
        title: 'Transcript (LiveCode)',
        status: true,
      },
      {
        title: 'TTCN (Tree and Tabular Combined Notation)',
        status: true,
      },
      {
        title: 'Turing',
        status: true,
      },
      {
        title: 'TUTOR (PLATO Author Language)',
        status: true,
      },
      {
        title: 'TXL',
        status: true,
      },
      {
        title: 'TypeScript',
        status: true,
      },
      {
        title: 'Tynker',
        status: true,
      },
      {
        title: 'Ubercode',
        status: true,
      },
      {
        title: 'UCSD Pascal',
        status: true,
      },
      {
        title: 'Umple',
        status: true,
      },
      {
        title: 'Unicon',
        status: true,
      },
      {
        title: 'Uniface',
        status: true,
      },
      {
        title: 'UNITY',
        status: true,
      },
      {
        title: 'UnrealScript',
        status: true,
      },
      {
        title: 'Vala',
        status: true,
      },
      {
        title: 'Verse',
        status: true,
      },
      {
        title: 'Vim script',
        status: true,
      },
      {
        title: 'Viper (Ethereum/Ether (ETH))',
        status: true,
      },
      {
        title: 'Visual DataFlex',
        status: true,
      },
      {
        title: 'Visual DialogScript',
        status: true,
      },
      {
        title: 'Visual FoxPro',
        status: true,
      },
      {
        title: 'Visual J++ (Visual J plus plus)',
        status: true,
      },
      {
        title: 'Visual LISP',
        status: true,
      },
      {
        title: 'Visual Objects',
        status: true,
      },
      {
        title: 'Visual Prolog',
        status: true,
      },
      {
        title: 'WATFIV, WATFOR (WATerloo FORtran IV)',
        status: true,
      },
      {
        title: 'WebAssembly',
        status: true,
      },
      {
        title: 'WebDNA',
        status: true,
      },
      {
        title: 'Whiley',
        status: true,
      },
      {
        title: 'Winbatch',
        status: true,
      },
      {
        title: 'Wolfram Language',
        status: true,
      },
      {
        title: 'Wyvern',
        status: true,
      },
      {
        title: 'X++ (X plus plus/Microsoft Dynamics AX)',
        status: true,
      },
      {
        title: 'X10',
        status: true,
      },
      {
        title: 'xBase++ (xBase plus plus)',
        status: true,
      },
      {
        title: 'XBL',
        status: true,
      },
      {
        title: 'XC (targets XMOS architecture)',
        status: true,
      },
      {
        title: 'xHarbour',
        status: true,
      },
      {
        title: 'XL',
        status: true,
      },
      {
        title: 'Xojo',
        status: true,
      },
      {
        title: 'XOTcl',
        status: true,
      },
      {
        title: 'Xod',
        status: true,
      },
      {
        title: 'XPL',
        status: true,
      },
      {
        title: 'XPL0',
        status: true,
      },
      {
        title: 'XQuery',
        status: true,
      },
      {
        title: 'XSB',
        status: true,
      },
      {
        title: 'XSharp (X#)',
        status: true,
      },
      {
        title: 'XSLT',
        status: true,
      },
      {
        title: 'Xtend',
        status: true,
      },
      {
        title: 'Yorick',
        status: true,
      },
      {
        title: 'YQL',
        status: true,
      },
      {
        title: 'Yoix',
        status: true,
      },
      {
        title: 'Z shell',
        status: true,
      },
      {
        title: 'Zebra, ZPL, ZPL2',
        status: true,
      },
      {
        title: 'Zeno',
        status: true,
      },
      {
        title: 'ZetaLisp',
        status: true,
      },
      {
        title: 'Zig',
        status: true,
      },
      {
        title: 'Zonnon',
        status: true,
      },
      {
        title: 'ZOPL',
        status: true,
      },
      {
        title: 'ZPL',
        status: true,
      },
      {
        title: 'Z++',
        status: true,
      }
    ],
      ["id"]);

  }
}