import server from './server';

const template = (req, res) => {
  const { initialState = {}, content = '' } = server(req, res);
  const scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/main.js"></script>
                `;
  const styles = `<link rel="stylesheet" type="text/css" href="/main.css">`;
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> Reactable </title>
                ${styles}
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
};

export default template;
