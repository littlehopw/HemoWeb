PGDMP                      }            hemoweb    17.2    17.2 %    N           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            O           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            P           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            Q           1262    16465    hemoweb    DATABASE     ~   CREATE DATABASE hemoweb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE hemoweb;
                     postgres    false            �            1259    16488    agendamento    TABLE     �  CREATE TABLE public.agendamento (
    id integer NOT NULL,
    usuario_fk integer NOT NULL,
    data_agendamento date NOT NULL,
    horario_agendamento time without time zone NOT NULL,
    hemocentro_fk integer NOT NULL,
    status_agendamento character varying(20) DEFAULT 'Pendente'::character varying,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT agendamento_status_agendamento_check CHECK (((status_agendamento)::text = ANY ((ARRAY['Pendente'::character varying, 'Confirmado'::character varying, 'Cancelado'::character varying])::text[])))
);
    DROP TABLE public.agendamento;
       public         heap r       postgres    false            �            1259    16487    agendamento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.agendamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.agendamento_id_seq;
       public               postgres    false    222            R           0    0    agendamento_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.agendamento_id_seq OWNED BY public.agendamento.id;
          public               postgres    false    221            �            1259    16509    doacao    TABLE       CREATE TABLE public.doacao (
    id integer NOT NULL,
    quantidade_sangue numeric(5,2) NOT NULL,
    agendamento_fk integer NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.doacao;
       public         heap r       postgres    false            �            1259    16508    doacao_id_seq    SEQUENCE     �   CREATE SEQUENCE public.doacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doacao_id_seq;
       public               postgres    false    224            S           0    0    doacao_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doacao_id_seq OWNED BY public.doacao.id;
          public               postgres    false    223            �            1259    16479    hemocentros    TABLE     �  CREATE TABLE public.hemocentros (
    id integer NOT NULL,
    rua character varying(255) NOT NULL,
    bairro character varying(100) NOT NULL,
    cidade character varying(100) NOT NULL,
    numero character varying(10) NOT NULL,
    cep character varying(10) NOT NULL,
    estado character varying(2) NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.hemocentros;
       public         heap r       postgres    false            �            1259    16478    hemocentros_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hemocentros_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hemocentros_id_seq;
       public               postgres    false    220            T           0    0    hemocentros_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.hemocentros_id_seq OWNED BY public.hemocentros.id;
          public               postgres    false    219            �            1259    16467    usuario    TABLE     �  CREATE TABLE public.usuario (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    senha character varying(255) NOT NULL,
    medula_ossea boolean NOT NULL,
    tipo_sanguineo character varying(3) NOT NULL,
    data_nascimento date NOT NULL,
    notificacoes boolean DEFAULT true,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.usuario;
       public         heap r       postgres    false            �            1259    16466    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public               postgres    false    218            U           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public               postgres    false    217            �           2604    16491    agendamento id    DEFAULT     p   ALTER TABLE ONLY public.agendamento ALTER COLUMN id SET DEFAULT nextval('public.agendamento_id_seq'::regclass);
 =   ALTER TABLE public.agendamento ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            �           2604    16512 	   doacao id    DEFAULT     f   ALTER TABLE ONLY public.doacao ALTER COLUMN id SET DEFAULT nextval('public.doacao_id_seq'::regclass);
 8   ALTER TABLE public.doacao ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            �           2604    16482    hemocentros id    DEFAULT     p   ALTER TABLE ONLY public.hemocentros ALTER COLUMN id SET DEFAULT nextval('public.hemocentros_id_seq'::regclass);
 =   ALTER TABLE public.hemocentros ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �           2604    16470 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            I          0    16488    agendamento 
   TABLE DATA           �   COPY public.agendamento (id, usuario_fk, data_agendamento, horario_agendamento, hemocentro_fk, status_agendamento, data_criacao, data_modificacao) FROM stdin;
    public               postgres    false    222   �.       K          0    16509    doacao 
   TABLE DATA           g   COPY public.doacao (id, quantidade_sangue, agendamento_fk, data_criacao, data_modificacao) FROM stdin;
    public               postgres    false    224   /       G          0    16479    hemocentros 
   TABLE DATA           s   COPY public.hemocentros (id, rua, bairro, cidade, numero, cep, estado, data_criacao, data_modificacao) FROM stdin;
    public               postgres    false    220   4/       E          0    16467    usuario 
   TABLE DATA           �   COPY public.usuario (id, nome, email, senha, medula_ossea, tipo_sanguineo, data_nascimento, notificacoes, data_criacao, data_modificacao) FROM stdin;
    public               postgres    false    218   Q/       V           0    0    agendamento_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.agendamento_id_seq', 1, false);
          public               postgres    false    221            W           0    0    doacao_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.doacao_id_seq', 1, false);
          public               postgres    false    223            X           0    0    hemocentros_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hemocentros_id_seq', 1, false);
          public               postgres    false    219            Y           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);
          public               postgres    false    217            �           2606    16497    agendamento agendamento_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.agendamento DROP CONSTRAINT agendamento_pkey;
       public                 postgres    false    222            �           2606    16518     doacao doacao_agendamento_fk_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT doacao_agendamento_fk_key UNIQUE (agendamento_fk);
 J   ALTER TABLE ONLY public.doacao DROP CONSTRAINT doacao_agendamento_fk_key;
       public                 postgres    false    224            �           2606    16516    doacao doacao_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT doacao_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doacao DROP CONSTRAINT doacao_pkey;
       public                 postgres    false    224            �           2606    16486    hemocentros hemocentros_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.hemocentros
    ADD CONSTRAINT hemocentros_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.hemocentros DROP CONSTRAINT hemocentros_pkey;
       public                 postgres    false    220            �           2606    16477    usuario usuario_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_email_key;
       public                 postgres    false    218            �           2606    16475    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    218            �           2606    16519    doacao fk_agendamento    FK CONSTRAINT     �   ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT fk_agendamento FOREIGN KEY (agendamento_fk) REFERENCES public.agendamento(id) ON DELETE CASCADE;
 ?   ALTER TABLE ONLY public.doacao DROP CONSTRAINT fk_agendamento;
       public               postgres    false    222    4779    224            �           2606    16503    agendamento fk_hemocentro    FK CONSTRAINT     �   ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT fk_hemocentro FOREIGN KEY (hemocentro_fk) REFERENCES public.hemocentros(id) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.agendamento DROP CONSTRAINT fk_hemocentro;
       public               postgres    false    4777    220    222            �           2606    16498    agendamento fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_fk) REFERENCES public.usuario(id) ON DELETE CASCADE;
 @   ALTER TABLE ONLY public.agendamento DROP CONSTRAINT fk_usuario;
       public               postgres    false    222    218    4775            I      x������ � �      K      x������ � �      G      x������ � �      E      x������ � �     