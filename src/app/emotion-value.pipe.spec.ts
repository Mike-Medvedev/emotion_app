import { EmotionValuePipe } from './emotion-value.pipe';

describe('EmotionValuePipe', () => {
  it('create an instance', () => {
    const pipe = new EmotionValuePipe();
    expect(pipe).toBeTruthy();
  });
});
