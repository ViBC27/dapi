const names: { [code: number]: { pt: string; en: string } } = {
  100: {
    en: 'Continue',
    pt: ''
  },
  101: {
    en: 'Switching Protocols',
    pt: ''
  },
  102: {
    // WebDAV; RFC 2518
    en: 'Processing',
    pt: ''
  },
  103: {
    // RFC 8297
    en: 'Early Hints',
    pt: ''
  },
  200: {
    en: 'OK',
    pt: ''
  },
  201: {
    en: 'Created',
    pt: ''
  },
  202: {
    en: 'Accepted',
    pt: ''
  },
  203: {
    // since HTTP/1.1
    en: 'Non-Authoritative Information',
    pt: ''
  },
  204: {
    en: 'No Content',
    pt: ''
  },
  205: {
    en: 'Reset Content',
    pt: ''
  },
  206: {
    // RFC 7233
    en: 'Partial Content',
    pt: ''
  },
  207: {
    // WebDAV; RFC 4918
    en: 'Multi-Status',
    pt: ''
  },
  208: {
    // WebDAV; RFC 5842
    en: 'Already Reported',
    pt: ''
  },
  226: {
    // RFC 3229
    en: 'IM Used',
    pt: ''
  },
  300: {
    en: 'Multiple Choices',
    pt: ''
  },
  301: {
    en: 'Moved Permanently',
    pt: ''
  },
  302: {
    // Previously "Moved temporarily"
    en: 'Found',
    pt: ''
  },
  303: {
    // since HTTP/1.1
    en: 'See Other',
    pt: ''
  },
  304: {
    // RFC 7232
    en: 'Not Modified',
    pt: ''
  },
  305: {
    // since HTTP/1.1
    en: 'Use Proxy',
    pt: ''
  },
  306: {
    en: 'Switch Proxy',
    pt: ''
  },
  307: {
    // since HTTP/1.1
    en: 'Temporary Redirect',
    pt: ''
  },
  308: {
    // RFC 7538
    en: 'Permanent Redirect',
    pt: ''
  },
  400: {
    en: 'Bad Request',
    pt: ''
  },
  401: {
    // RFC 7235
    en: 'Unauthorized',
    pt: ''
  },
  402: {
    en: 'Payment Required',
    pt: ''
  },
  403: {
    en: 'Forbidden',
    pt: ''
  },
  404: {
    en: 'Not Found',
    pt: 'Não Encontrado'
  },
  405: {
    en: 'Method Not Allowed',
    pt: ''
  },
  406: {
    en: 'Not Acceptable',
    pt: ''
  },
  407: {
    // RFC 7235
    en: 'Proxy Authentication Required',
    pt: ''
  },
  408: {
    en: 'Request Timeout',
    pt: ''
  },
  409: {
    en: 'Conflict',
    pt: ''
  },
  410: {
    en: 'Gone',
    pt: ''
  },
  411: {
    en: 'Length Required',
    pt: ''
  },
  412: {
    // RFC 7232
    en: 'Precondition Failed',
    pt: ''
  },
  413: {
    // RFC 7231
    en: 'Payload Too Large',
    pt: ''
  },
  414: {
    // RFC 7231
    en: 'URI Too Long',
    pt: ''
  },
  415: {
    // RFC 7231
    en: 'Unsupported Media Type',
    pt: ''
  },
  416: {
    // RFC 7233
    en: 'Range Not Satisfiable',
    pt: ''
  },
  417: {
    en: 'Expectation Failed',
    pt: ''
  },
  418: {
    // RFC 2324, RFC 7168
    en: "I'm a teapot",
    pt: ''
  },
  421: {
    // RFC 7540
    en: 'Misdirected Request',
    pt: ''
  },
  422: {
    // WebDAV; RFC 4918
    en: 'Unprocessable Entity',
    pt: ''
  },
  423: {
    // WebDAV; RFC 4918
    en: 'Locked',
    pt: ''
  },
  424: {
    // WebDAV; RFC 4918
    en: 'Failed Dependency',
    pt: ''
  },
  425: {
    // RFC 8470
    en: 'Too Early',
    pt: ''
  },
  426: {
    en: 'Upgrade Required',
    pt: ''
  },
  428: {
    // RFC 6585
    en: 'Precondition Required',
    pt: ''
  },
  429: {
    // RFC 6585
    en: 'Too Many Requests',
    pt: ''
  },
  431: {
    // RFC 6585
    en: 'Request Header Fields Too Large',
    pt: ''
  },
  451: {
    // RFC 7725
    en: 'Unavailable For Legal Reasons',
    pt: ''
  },
  500: {
    en: 'Internal Server Error',
    pt: 'Erro Interno do Servidor'
  },
  501: {
    en: 'Not Implemented',
    pt: ''
  },
  502: {
    en: 'Bad Gateway',
    pt: ''
  },
  503: {
    en: 'Service Unavailable',
    pt: ''
  },
  504: {
    en: 'Gateway Timeout',
    pt: ''
  },
  505: {
    en: 'HTTP Version Not Supported',
    pt: ''
  },
  506: {
    // RFC 2295
    en: 'Variant Also Negotiates',
    pt: ''
  },
  507: {
    // WebDAV; RFC 4918
    en: 'Insufficient Storage',
    pt: ''
  },
  508: {
    // WebDAV; RFC 5842
    en: 'Loop Detected',
    pt: ''
  },
  510: {
    // RFC 2774
    en: 'Not Extended',
    pt: ''
  },
  511: {
    // RFC 6585
    en: 'Network Authentication Required',
    pt: ''
  }
};

export default names;
