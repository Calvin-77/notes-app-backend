const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
    username,
}) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    updatedAt: updated_at,
    username,
});

// mengubah nama created_at dan updated_at (nama kolom di database) menjadi createdAt dan updatedAt (nama variable di script) agar tidak terjadi error.
module.exports = { mapDBToModel };