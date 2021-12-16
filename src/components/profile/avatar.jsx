import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'

export default function Avatar(props) {
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (props.user) setAvatarUrl(props.image);
  }, [props, avatarUrl]);

  async function downloadImage(path) {
    try {
      let imageName = path.split('/')[1];
      console.log(imageName);
      const { data, error } = await supabase.storage.from(`bucket-${props.user.id}`).download(imageName)
      if (error) throw error;
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
      console.log(avatarUrl);
      window.location.reload();
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { data, error: uploadError } = await supabase.storage
        .from(`bucket-${props.user.id}`)
        .upload(filePath, file)

      if (uploadError) {

        let { error: createError } = await supabase.storage
          .createBucket(`bucket-${props.user.id}`, { public: false })

        if (createError) throw createError;

        let { data, error } = await supabase.storage
          .from(`bucket-${props.user.id}`)
          .upload(filePath, file);

        if (error) throw error;

        console.log(data);
      }

      let { error: databaseError } = await supabase.from('user').update({ avatar_url: data.Key }, {
        returning: 'minimal', // Don't return the value after inserting
      })

      downloadImage(data.Key);

      if (databaseError) {
        throw databaseError
      }

    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
        />
      ) : (
        <div className="avatar no-image" />
      )}
      <div>
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  )
}