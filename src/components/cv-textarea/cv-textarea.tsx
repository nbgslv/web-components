import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cv-textarea',
  styleUrl: 'cv-textarea.css',
  shadow: true,
})

export class CvTextarea {
  /**
   * Value of the textarea
   */
  @Prop() value: string;

  /**
   * Placeholder of the textarea
   */
  @Prop() placeholder: string;

  /**
   * Name of the textarea
   */
  @Prop() name: string;

  /**
   * Label of the textarea
   */
  @Prop() label: string;

  render() {
    return (
      <div class="cv-textarea">
        <label htmlFor={this.name}>{this.label}</label>
        <textarea id={this.name} name={this.name} placeholder={this.placeholder} value={this.value} />
      </div>
    );
  }
}
