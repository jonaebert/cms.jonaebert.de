import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCopyright extends Struct.ComponentSchema {
  collectionName: 'components_shared_copyrights';
  info: {
    displayName: 'Copyright';
    icon: 'stack';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    copyright: Schema.Attribute.Component<'shared.copyright', false>;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'picture';
  };
  attributes: {
    copyright: Schema.Attribute.Component<'shared.copyright', true> &
      Schema.Attribute.Required;
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
  };
  attributes: {
    body: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.copyright': SharedCopyright;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
