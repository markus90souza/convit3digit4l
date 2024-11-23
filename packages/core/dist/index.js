"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Data: () => Data,
  Id: () => Id,
  Password: () => Password,
  Slug: () => Slug,
  complementaryEvent: () => complementaryEvent,
  complementaryGuest: () => complementaryGuest,
  createEventEmpty: () => createEventEmpty,
  createGuestEmpty: () => createGuestEmpty,
  events: () => events
});
module.exports = __toCommonJS(src_exports);

// src/shared/id.ts
var import_uuid = require("uuid");
var Id = class {
  static create() {
    return (0, import_uuid.v4)();
  }
  static isValid(id) {
    return (0, import_uuid.validate)(id);
  }
};

// src/shared/slug.ts
var Slug = class {
  static generate(value) {
    return value.normalize("NFKD").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }
};

// src/shared/password.ts
var Password = class {
  static nova(tamanho = 15) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especiais = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, especiais];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }
    return senha.join("");
  }
};

// src/shared/date.ts
var Data = class {
  static formatar(data) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = data ?? /* @__PURE__ */ new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }
  static desformatar(data) {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":");
    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
};

// src/event/services/validate-event.ts
var validateEvent = (event) => {
  const erros = [];
  if (!event.slug) {
    erros.push("Slug \xE9 obrigat\xF3rio");
  }
  if (!event.title) {
    erros.push("T\xEDtulo \xE9 obrigat\xF3rio");
  }
  if (!event.description) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!event.date) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!event.location) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!event.expected_audience || event.expected_audience < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!event.image) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!event.image_banner) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
};

// src/event/services/complementary-event.ts
var complementaryEvent = (eventPartial) => {
  const errors = validateEvent(eventPartial);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const event = {
    ...eventPartial,
    id: eventPartial.id ?? Id.create(),
    password: eventPartial.password ?? Password.nova(20),
    expected_audience: +(eventPartial.expected_audience ?? 1)
  };
  return event;
};

// src/event/services/validate-guest.ts
var validateGuest = (guest) => {
  const erros = [];
  if (!guest.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!guest.email) {
    erros.push("E-mail \xE9 obrigat\xF3rio");
  }
  return erros;
};

// src/event/services/complementary-guest.ts
var complementaryGuest = (guest) => {
  const errors = validateGuest(guest);
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  const quantityCompanions = guest.number_of_companions ?? 0;
  const hasCompanions = guest.is_companion && guest.is_confirm && quantityCompanions > 0;
  const updatedGuest = {
    ...guest,
    number_of_companions: hasCompanions ? quantityCompanions : 0,
    is_companion: hasCompanions
  };
  return updatedGuest;
};

// src/event/services/create-event-empty.ts
var createEventEmpty = () => {
  return {
    id: Id.create(),
    title: "",
    description: "",
    date: /* @__PURE__ */ new Date(),
    location: "",
    expected_audience: 1,
    image: "",
    image_banner: ""
  };
};

// src/event/services/create-guest-empty.ts
var createGuestEmpty = () => {
  return {
    id: Id.create(),
    name: "",
    email: "",
    is_confirm: true,
    is_companion: false,
    number_of_companions: 0
  };
};

// src/constants/events.ts
var events = [
  {
    id: "xdlhnq5lwm-esmllp6nie-hzgl0ajulz7",
    slug: "evento-fullstack",
    password: "password123",
    title: "Evento de Desenvolvimento Fullstack",
    date: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    location: "S\xE3o Paulo, SP",
    description: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    image_banner: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    expected_audience: 200,
    guests: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        name: "Alice Silva",
        email: "alice@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 1
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        is_confirm: false,
        is_companion: false,
        number_of_companions: 0
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 2
      }
    ]
  },
  {
    id: "2kis8yvhcvv-8um289gg1x5-zw08j0ciytk",
    slug: "evento-js-avancado",
    password: "js2024",
    title: "Workshop Avan\xE7ado de JavaScript",
    date: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avan\xE7ado para programadores JavaScript.",
    image: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    image_banner: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    expected_audience: 100,
    guests: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        is_confirm: true,
        is_companion: false,
        number_of_companions: 0
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 1
      }
    ]
  },
  {
    id: "5nef2v2sxhl-80hjydv7qd5-fddre4x4oyr",
    slug: "evento-dev-frontend",
    password: "front123",
    title: "Bootcamp de Desenvolvimento Frontend",
    date: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    image_banner: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    expected_audience: 150,
    guests: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 1
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        is_confirm: false,
        is_companion: false,
        number_of_companions: 0
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        name: "Isabela Martins",
        email: "isabela@example.com",
        is_confirm: true,
        is_companion: false,
        number_of_companions: 0
      }
    ]
  },
  {
    id: "oz9uvdydcd-nql21g818sa-dwvqulair8l",
    slug: "casamento-alberto-marina",
    password: "casamento2024",
    title: "Casamento do Alberto e Marina",
    date: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    location: "Florian\xF3polis, SC",
    description: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    image: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    image_banner: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    expected_audience: 150,
    guests: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 1
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        name: "Carla Mendes",
        email: "carla@example.com",
        is_confirm: true,
        is_companion: false,
        number_of_companions: 0
      }
    ]
  },
  {
    id: "muowo4f7k89-b93nq8qxqqd-0noa74ohiw9",
    slug: "aniversario-joao",
    password: "joao2024",
    title: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    date: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    image: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    image_banner: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    expected_audience: 80,
    guests: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        name: "Maria Souza",
        email: "maria@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 2
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        name: "Jos\xE9 Almeida",
        email: "jose@example.com",
        is_confirm: false,
        is_companion: false,
        number_of_companions: 0
      }
    ]
  },
  {
    id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
    slug: "inauguracao-loja-estrela",
    password: "estrela2024",
    title: "Inaugura\xE7\xE3o da Loja Estrela",
    date: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    image: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    image_banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    expected_audience: 300,
    guests: [
      {
        id: "i3sg2jyquog-vnku4n38v4-6dibxujxr56",
        name: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 3
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        is_confirm: true,
        is_companion: false,
        number_of_companions: 0
      }
    ]
  },
  {
    id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
    slug: "reuniao-familia-oliveira",
    password: "familia2024",
    title: "Reuni\xE3o da Fam\xEDlia Oliveira",
    date: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    image: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    image_banner: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    expected_audience: 50,
    guests: [
      {
        id: "81ks0oozc35-ljvo5a8rqzg-qt28hdn6vge",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        is_confirm: true,
        is_companion: true,
        number_of_companions: 4
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        name: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        is_confirm: true,
        is_companion: false,
        number_of_companions: 0
      }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Data,
  Id,
  Password,
  Slug,
  complementaryEvent,
  complementaryGuest,
  createEventEmpty,
  createGuestEmpty,
  events
});
