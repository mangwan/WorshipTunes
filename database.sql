--
-- Name: song; Type: TABLE; Schema: public
--

CREATE TABLE public.song (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    artist character varying(50) NOT NULL,
    lyrics text NOT NULL,
    original_key character varying(2) NOT NULL,
    tempo character varying(10) NOT NULL,
    "BPM" integer,
    "CCLI" integer,
    spotify_uri character varying(1000),
    album_cover character varying(1000)
);


--
-- Name: song_id_seq; Type: SEQUENCE; Schema: public
--

CREATE SEQUENCE public.song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: song_id_seq; Type: SEQUENCE OWNED BY; Schema: public
--

ALTER SEQUENCE public.song_id_seq OWNED BY public.song.id;


--
-- Name: song_requests; Type: TABLE; Schema: public
--

CREATE TABLE public.song_requests (
    id integer NOT NULL,
    date date,
    name character varying(50),
    email character varying(50),
    song_title character varying(50),
    artist_name character varying(50)
);


--
-- Name: song_requests_id_seq; Type: SEQUENCE; Schema: public
--

CREATE SEQUENCE public.song_requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: song_requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public
--

ALTER SEQUENCE public.song_requests_id_seq OWNED BY public.song_requests.id;


--
-- Name: user; Type: TABLE; Schema: public
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    first_name character varying(80) NOT NULL,
    last_name character varying(80) NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL,
    is_admin boolean
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: song id; Type: DEFAULT; Schema: public
--

ALTER TABLE ONLY public.song ALTER COLUMN id SET DEFAULT nextval('public.song_id_seq'::regclass);


--
-- Name: song_requests id; Type: DEFAULT; Schema: public
--

ALTER TABLE ONLY public.song_requests ALTER COLUMN id SET DEFAULT nextval('public.song_requests_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: song song_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.song
    ADD CONSTRAINT song_pkey PRIMARY KEY (id);


--
-- Name: song_requests song_requests_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.song_requests
    ADD CONSTRAINT song_requests_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


