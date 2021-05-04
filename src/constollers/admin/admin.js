let app = { get: function () {} };

/**
 * @openapi
 * /admin/users:
 *  get:
 *    description: ユーザー一覧を返す
 *    tags: [Users]
 *    operationId: findUses
 *    parameters:
 *      - name: limit
 *        in: query
 *        description: 最大表示数
 *        required: false
 *        schema:
 *          type: integer
 *          format: int32
 *    security:
 *      - ApiKeyAuth: []
 *      - OAuth2:
 *        - write
 *        - admin
 *        - system_admin
 *    responses:
 *      '200':
 *        description: user response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *      default:
 *        description: unexpected error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AdminError'
 */
app.get("/users", (req, res) => {
  res.json({
    /** user list */
  });
});

/**
 * @openapi
 *  /users/{id}:
 *    delete:
 *      summary: ユーザーを削除する
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: ユーザー id
 *          required: true
 *          schema:
 *            type: integer
 *      security:
 *        - ApiKeyAuth: []
 *        - OAuth2:
 *          - admin
 *          - system_admin
 *      responses:
 *        200:
 *          description: The user was deleted
 *        404:
 *          description: The user was not found
 *
 */
app.delete("/users/:id", () => {});
