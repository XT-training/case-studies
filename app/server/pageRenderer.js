import server from './server';

const template = () => {
  const { initialState = {}, content = '' } = server();
  const scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/vendors~main.chunk.js"></script>
                <script src="/main.js"></script>
                `;
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> Reactable </title>
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
