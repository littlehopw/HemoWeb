--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6
-- Dumped by pg_dump version 17.1

-- Started on 2025-05-05 19:58:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: agendamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agendamento (
    id integer NOT NULL,
    usuario_fk integer NOT NULL,
    data_agendamento date NOT NULL,
    horario_agendamento time without time zone NOT NULL,
    hemocentro_fk integer NOT NULL,
    status_agendamento character varying(20) DEFAULT 'Pendente'::character varying,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT agendamento_status_agendamento_check CHECK (((status_agendamento)::text = ANY (ARRAY[('Pendente'::character varying)::text, ('Confirmado'::character varying)::text, ('Cancelado'::character varying)::text])))
);


ALTER TABLE public.agendamento OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16406)
-- Name: agendamento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agendamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.agendamento_id_seq OWNER TO postgres;

--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 216
-- Name: agendamento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.agendamento_id_seq OWNED BY public.agendamento.id;


--
-- TOC entry 217 (class 1259 OID 16407)
-- Name: doacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doacao (
    id integer NOT NULL,
    quantidade_sangue numeric(5,2) NOT NULL,
    agendamento_fk integer NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    data_modificacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.doacao OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16412)
-- Name: doacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doacao_id_seq OWNER TO postgres;

--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 218
-- Name: doacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doacao_id_seq OWNED BY public.doacao.id;


--
-- TOC entry 219 (class 1259 OID 16413)
-- Name: hemocentros; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hemocentros (
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


ALTER TABLE public.hemocentros OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16418)
-- Name: hemocentros_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hemocentros_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.hemocentros_id_seq OWNER TO postgres;

--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 220
-- Name: hemocentros_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hemocentros_id_seq OWNED BY public.hemocentros.id;


--
-- TOC entry 222 (class 1259 OID 24628)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
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


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24627)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_seq OWNER TO postgres;

--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 221
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 4703 (class 2604 OID 16457)
-- Name: agendamento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento ALTER COLUMN id SET DEFAULT nextval('public.agendamento_id_seq'::regclass);


--
-- TOC entry 4707 (class 2604 OID 16458)
-- Name: doacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doacao ALTER COLUMN id SET DEFAULT nextval('public.doacao_id_seq'::regclass);


--
-- TOC entry 4710 (class 2604 OID 16459)
-- Name: hemocentros id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hemocentros ALTER COLUMN id SET DEFAULT nextval('public.hemocentros_id_seq'::regclass);


--
-- TOC entry 4713 (class 2604 OID 24631)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 4719 (class 2606 OID 16431)
-- Name: agendamento agendamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_pkey PRIMARY KEY (id);


--
-- TOC entry 4721 (class 2606 OID 16433)
-- Name: doacao doacao_agendamento_fk_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT doacao_agendamento_fk_key UNIQUE (agendamento_fk);


--
-- TOC entry 4723 (class 2606 OID 16435)
-- Name: doacao doacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT doacao_pkey PRIMARY KEY (id);


--
-- TOC entry 4725 (class 2606 OID 16437)
-- Name: hemocentros hemocentros_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hemocentros
    ADD CONSTRAINT hemocentros_pkey PRIMARY KEY (id);


--
-- TOC entry 4727 (class 2606 OID 24638)
-- Name: usuario usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- TOC entry 4729 (class 2606 OID 24636)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 4731 (class 2606 OID 16442)
-- Name: doacao fk_agendamento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doacao
    ADD CONSTRAINT fk_agendamento FOREIGN KEY (agendamento_fk) REFERENCES public.agendamento(id) ON DELETE CASCADE;


--
-- TOC entry 4730 (class 2606 OID 16447)
-- Name: agendamento fk_hemocentro; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT fk_hemocentro FOREIGN KEY (hemocentro_fk) REFERENCES public.hemocentros(id) ON DELETE CASCADE;


-- Completed on 2025-05-05 19:58:20

--
-- PostgreSQL database dump complete
--

